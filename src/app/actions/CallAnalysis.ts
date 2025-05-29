'use server'

import { PrismaClient } from '@/generated/prisma' // adjust this path based on your project
const prisma = new PrismaClient()

type CallAnalysisInput = {
  callId: string
  timestamp: string
  duration: number
  callType: string
  channel: string
  languagePreference: string
  location: string
  customer: {
    customerId: string
    msisdn: string
    customerName: string
    accountType: string
    customerSegment: string
  }
  agent: {
    agentId: string
    agentName: string
    department: string
    languageUsed: string
  }
  categorization: {
    serviceCategory: string
    serviceSubcategory: string
    issueType: string
    specificIssue: string
  }
  experience: {
    sentiment: string
    emotionalTone: string
    satisfactionIndicator: string
    csatScore: number
    npsIntentToRecommend: number
    feedbackProvided: boolean
  }
  qualityAssessment: {
    greetingCompliance: boolean
    closureCompliance: boolean
    scriptAdherence: string
    empathyShown: boolean
    activeListening: boolean
    problemSolving: string
    callQualityScore: number
    qaRemarks: string
  }
  summary: {
    shortSummary: string
    fullSummary: string
  }
  tags: string[]
}

export async function saveCallAnalysis(data: CallAnalysisInput) {
  const result = await prisma.callAnalysis.create({
    data: {
      callId: data.callId,
      timestamp: data.timestamp ? new Date(data.timestamp) : undefined,
      duration: data.duration,
      callType: data.callType,
      channel: data.channel,
      languagePreference: data.languagePreference,
      location: data.location,

      customer: {
        create: {
          customerId: data.customer.customerId,
          msisdn: data.customer.msisdn,
          customerName: data.customer.customerName,
          accountType: data.customer.accountType,
          customerSegment: data.customer.customerSegment
        }
      },

      agent: {
        create: {
          agentId: data.agent.agentId,
          agentName: data.agent.agentName,
          department: data.agent.department,
          languageUsed: data.agent.languageUsed
        }
      },

      categorization: {
        create: {
          serviceCategory: data.categorization.serviceCategory,
          serviceSubcategory: data.categorization.serviceSubcategory,
          issueType: data.categorization.issueType,
          specificIssue: data.categorization.specificIssue
        }
      },

      experience: {
        create: {
          sentiment: data.experience.sentiment,
          emotionalTone: data.experience.emotionalTone,
          satisfactionIndicator: data.experience.satisfactionIndicator,
          csatScore: data.experience.csatScore,
          npsIntentToRecommend: data.experience.npsIntentToRecommend,
          feedbackProvided: data.experience.feedbackProvided
        }
      },

      qualityAssessment: {
        create: {
          greetingCompliance: data.qualityAssessment.greetingCompliance,
          closureCompliance: data.qualityAssessment.closureCompliance,
          scriptAdherence: data.qualityAssessment.scriptAdherence,
          empathyShown: data.qualityAssessment.empathyShown,
          activeListening: data.qualityAssessment.activeListening,
          problemSolving: data.qualityAssessment.problemSolving,
          callQualityScore: data.qualityAssessment.callQualityScore,
          qaRemarks: data.qualityAssessment.qaRemarks
        }
      },

      summary: {
        create: {
          shortSummary: data.summary.shortSummary,
          fullSummary: data.summary.fullSummary
        }
      },

      tags: data.tags
    }
  })

  return result
}
