const model = require("../components/user/user.model")

class ApiFeature {
	static FILTER_EXCLUDED_LIST = ["page", "sort", "keyword", "fields"]

	constructor(findQuery, queryParams) {
		this.findQuery = findQuery
		this.queryParams = queryParams
		this.page
	}

	paginate(pageSize = 20) {
		this.page = this.queryParams?.page || 1
		if (this.page < 1) this.page = 1

		this.findQuery.skip((this.page - 1) * pageSize).limit(pageSize)

		return this
	}

	sort() {
		if (this.queryParams?.sort) {
			this.findQuery.sort(this.queryParams.sort.split(",").join(" "))
		}
		return this
	}

	filter() {
		const filterQuery = { ...this.queryParams }

		//Exclude non-filtering params
		ApiFeature.FILTER_EXCLUDED_LIST.forEach((element) => {
			delete filterQuery[element]
		})

		const query = JSON.parse(
			JSON.stringify(filterQuery).replace(
				/(lte|lt|gt|gte)/g,
				(match) => `$${match}`
			)
		)

		this.findQuery.find(query)

		return this
	}

	search(fieldsToSearchFor) {
		fieldsToSearchFor = fieldsToSearchFor.map((field) => ({
			[field]: { $regex: this.queryParams?.keyword, $options: "i" },
		}))

		if (this.queryParams?.keyword) {
			this.findQuery.find({
				$or: fieldsToSearchFor,
			})
		}
		return this
	}

	selectFields() {
		if (this.queryParams?.fields) {
			this.findQuery.select(this.queryParams?.fields.split(",").join(" "))
		}
		return this
	}
}

exports.ApiFeature = ApiFeature