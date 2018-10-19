<template>
	<div id="calculator">
		<h1>BAP</h1>
		<div class="right">
			<section class="brackets">
				<ul class="brackets-list">
					<li class="bracket-item" v-for="b in brackets">
						<strong class="rate">{{ b.rate }}%</strong>
						<span class="single">Single: {{ b.single }}</span>
						<span class="joint">Joint: {{ b.joint }}</span>
					</li>
				</ul>
			</section>
			<section class="tax-info">
				<h2>Tax Bracket</h2>
				<div class="data-group">
					<span>Tax bracket: </span>
					<span>{{ taxBracket }}%</span>
				</div>
				<div class="data-group space">
					<span>Capital Gain: </span>
					<span>{{ longTerm ? 'Long Term' : 'Short Term' }}</span>
				</div>
				<div class="data-group">
					<span>Tax Rate: </span>
					<span>{{ taxRatePercent }}</span>
				</div>
			</section>
			<section class="result">
				<h2>Results</h2>
				<div class="data-group">
					<span>Pre-tax Gain: </span>
					<span>{{ result.preTax | currency() }}</span>
				</div>
				<div class="data-group">
					<span>Tax amount: </span>
					<span>{{ result.taxAmount | currency() }}</span>
				</div>
				<div class="data-group">
					<span>Post-tax gain: </span>
					<span>{{ result.postTax | currency() }}</span>
				</div>
				<div class="data-group space">
					<span>Buy again price: </span>
					<strong>{{ result.bap | currency() }}</strong>
				</div>
			</section>
		</div>
		<form>
			<div class="form-body">
				<div class="input-group">
					<label>Annual Salary</label>
					<input type="number" v-model="annualSalary">
				</div>
				<div class="input-group">
					<label>Cost Basis</label>
					<p>At what price was the stock bought?</p>
					<input type="number" v-model="costBasis">
				</div>
				<div class="input-group">
					<label>Sell Price</label>
					<p>At what price was the stock sold?</p>
					<input type="number" v-model="sellPrice">
				</div>
				<div class="input-group">
					<label>
						<input type="checkbox" v-model="longTerm">
						I held the stock for more than 1 year.
					</label>
				</div>
			</div>
			<div class="form-foot">
				<button type="button" class="primary" @click="clear">Reset</button>
			</div>
		</form>
	</div>
</template>

<script src="./calculator.js"></script>

<style lang="less">
	@import './calculator.less';
</style>