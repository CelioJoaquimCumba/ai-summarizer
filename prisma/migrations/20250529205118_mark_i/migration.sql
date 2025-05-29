-- CreateTable
CREATE TABLE "CallAnalysis" (
    "id" TEXT NOT NULL,
    "callId" TEXT,
    "timestamp" TIMESTAMP(3),
    "duration" INTEGER NOT NULL,
    "callType" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "languagePreference" TEXT NOT NULL,
    "location" TEXT,
    "customerId" TEXT,
    "agentId" TEXT,
    "categorizationId" TEXT,
    "experienceId" TEXT,
    "qualityAssessmentId" TEXT,
    "summaryId" TEXT,
    "tags" TEXT[],

    CONSTRAINT "CallAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "customerId" TEXT,
    "msisdn" TEXT,
    "customerName" TEXT,
    "accountType" TEXT NOT NULL,
    "customerSegment" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agent" (
    "id" TEXT NOT NULL,
    "agentId" TEXT,
    "agentName" TEXT,
    "department" TEXT,
    "languageUsed" TEXT NOT NULL,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorization" (
    "id" TEXT NOT NULL,
    "serviceCategory" TEXT NOT NULL,
    "serviceSubcategory" TEXT NOT NULL,
    "issueType" TEXT NOT NULL,
    "specificIssue" TEXT NOT NULL,

    CONSTRAINT "Categorization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL,
    "sentiment" TEXT NOT NULL,
    "emotionalTone" TEXT NOT NULL,
    "satisfactionIndicator" TEXT NOT NULL,
    "csatScore" INTEGER NOT NULL,
    "npsIntentToRecommend" INTEGER NOT NULL,
    "feedbackProvided" BOOLEAN NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QualityAssessment" (
    "id" TEXT NOT NULL,
    "greetingCompliance" BOOLEAN NOT NULL,
    "closureCompliance" BOOLEAN NOT NULL,
    "scriptAdherence" TEXT NOT NULL,
    "empathyShown" BOOLEAN NOT NULL,
    "activeListening" BOOLEAN NOT NULL,
    "problemSolving" TEXT NOT NULL,
    "callQualityScore" DOUBLE PRECISION NOT NULL,
    "qaRemarks" TEXT NOT NULL,

    CONSTRAINT "QualityAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CallSummary" (
    "id" TEXT NOT NULL,
    "shortSummary" TEXT NOT NULL,
    "fullSummary" TEXT NOT NULL,

    CONSTRAINT "CallSummary_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CallAnalysis" ADD CONSTRAINT "CallAnalysis_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CallAnalysis" ADD CONSTRAINT "CallAnalysis_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CallAnalysis" ADD CONSTRAINT "CallAnalysis_categorizationId_fkey" FOREIGN KEY ("categorizationId") REFERENCES "Categorization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CallAnalysis" ADD CONSTRAINT "CallAnalysis_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CallAnalysis" ADD CONSTRAINT "CallAnalysis_qualityAssessmentId_fkey" FOREIGN KEY ("qualityAssessmentId") REFERENCES "QualityAssessment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CallAnalysis" ADD CONSTRAINT "CallAnalysis_summaryId_fkey" FOREIGN KEY ("summaryId") REFERENCES "CallSummary"("id") ON DELETE SET NULL ON UPDATE CASCADE;
