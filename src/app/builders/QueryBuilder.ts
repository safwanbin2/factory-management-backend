class QueryBuilder {
  public modelQuery: Record<string, any>;
  public query: Record<string, any>;

  constructor(modelQuery: Record<string, any>, query: Record<string, any>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchAbleFields: string[]) {
    let searchTerm = this?.query?.searchTerm;

    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchAbleFields.map((field) => ({
          [field]: { $regex: searchTerm, $options: "i" },
        })),
      });
    }
    return this;
  }

  filter() {
    let queryObj = { ...this.query };
    let excludeFields = ["searchTerm", "sort", "page", "limit"];

    excludeFields.forEach((el) => delete queryObj[el]);
    this.modelQuery = this.modelQuery.find(queryObj);
    return this;
  }

  sort() {
    let sort = this?.query?.sort?.split(",")?.join(" ") || "-createdAt";
    this.modelQuery = this.modelQuery.sort(sort);

    return this;
  }

  paginate() {
    let page = Number(this?.query?.page) || 1;
    let limit = Number(this?.query?.limit) || 2;
    let skip = (page - 1) * limit;

    this.modelQuery = this.modelQuery.skip(skip).limit(limit);
    return this;
  }
}

export default QueryBuilder;
