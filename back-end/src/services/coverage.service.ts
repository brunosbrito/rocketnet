import coverageModel from "../models/coverage.model";

const valideteCoverage =async (coverage: string) => {
  const result = await coverageModel.valideteCoverage(coverage)

  return result;
  
}

const coverageService = { valideteCoverage};

export default coverageService;