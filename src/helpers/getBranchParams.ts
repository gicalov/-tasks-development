interface IgetBranchParams {
  angleSegmentsCount: number;
  branchShorteningFactor: number;
}

export const getBranchParams = (snowflakeType: number): IgetBranchParams => {
  switch (snowflakeType) {
    case 1:
      return {
        angleSegmentsCount: 3,
        branchShorteningFactor: 3,
      };
    case 2:
      return {
        angleSegmentsCount: 3,
        branchShorteningFactor: 2,
      };
    case 3:
      return {
        angleSegmentsCount: 3,
        branchShorteningFactor: 5,
      };
    case 4:
      return {
        angleSegmentsCount: 2,
        branchShorteningFactor: 3,
      };
    case 5:
      return {
        angleSegmentsCount: 4,
        branchShorteningFactor: 3,
      };
    case 6:
      return {
        angleSegmentsCount: 4,
        branchShorteningFactor: 2,
      };
    default:
      return {
        angleSegmentsCount: 3,
        branchShorteningFactor: 3,
      };
  }
};
