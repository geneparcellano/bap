export default {
	data() {
		return {
			brackets: [
				{
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
				}
			],
			annualSalary: 50000,
			costBasis: 0,
			sellPrice: 0,
			longTerm: false,
		}
	},
	computed: {
		taxBracket() {
			let s = this.annualSalary;

			switch(true) {
				case s <= 9525:
					return 10;
				case s >= 9526 && s <= 38700:
					return 12;
				case s >= 38701 && s <= 82500:
					return 22;
				case s >= 82501 && s <= 157500:
					return 24;
				case s >= 157501 && s <= 200000:
					return 32;
				case s >= 200001 && s <= 500000:
					return 35;
				case s >= 500001:
					return 37;
			}
		},
		taxRatePercent() {
			let s = this.annualSalary;

			// Short term capital gain
			if (!this.longTerm) {
				return this.taxBracket / 100;
			}

			// Long term capital gain
			switch(true) {
				case s <= 38600:
					return 0;
				case s >= 38601 && s <= 425800:
					return 0.15;
				case s >= 425801:
					return 0.20;
			}
		},
		result() {
			let preTaxGain = this.sellPrice - this.costBasis;

			let taxAmount = preTaxGain > 0 ? preTaxGain * this.taxRatePercent : 0;
			let postTaxGain = preTaxGain - taxAmount;
			let bap = this.sellPrice - taxAmount;
			let result = {
				taxAmount : taxAmount,
				preTax : preTaxGain,
				postTax : postTaxGain,
				bap : bap
			}

			return result;
		},
	},
	methods: {
		clear() {
			this.annualSalary = 0;
			this.costBasis = 0;
			this.sellPrice = 0;
			this.longTerm = false;
		}
	}
}