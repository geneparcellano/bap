export default {
	data() {
		return {
			brackets: [{
				rate: 10,
				single: "Up to $9,525",
				joint: "Up to $19,050"
			},{
				rate: 12,
				single: "$9,526 to $38,700",
				joint: "$19,051 to $77,400"
			},{
				rate: 22,
				single: "$38,701 to $82,500",
				joint: "$77,401 to $165,000"
			},{
				rate: 24,
				single: "$82,501 to $157,500",
				joint: "$165,001 to $315,000"
			},{
				rate: 32,
				single: "$157,501 to $200,000",
				joint: "$315,001 to $400,000"
			},{
				rate: 35,
				single: "$200,001 to $500,000",
				joint: "$400,001 to $600,000"
			},{
				rate: 37,
				single: "over $500,000",
				joint: "over $600,000"
			}],
			bracket: 24,
			costBasis: 0,
			sellPrice: 0,
			longTerm: false,
			result: null
		}
	},
	computed: {
		taxPercent() {
			return this.longTerm ? 0.15 : this.bracket / 100;
		}
	},
	methods: {
		roundToTwo(amount) {
			return parseFloat((amount * 100) / 100).toFixed(2);
		},
		calculate() {
			let preTaxGain = this.sellPrice - this.costBasis;
			let taxAmount = preTaxGain > 0 ? preTaxGain * this.taxPercent : 0;
			let postTaxGain = preTaxGain - taxAmount;
			let bap = this.sellPrice - taxAmount;
			let result = {
				taxAmount : this.roundToTwo(taxAmount),
				preTax : this.roundToTwo(preTaxGain),
				postTax : this.roundToTwo(postTaxGain),
				bap : this.roundToTwo(bap)
			}

			this.result = result;

			return result;
		},
		clear() {
			this.bracket = 24;
			this.costBasis = 0;
			this.sellPrice = 0;
			this.longTerm = false;
			this.result = null;
		}
	}
}