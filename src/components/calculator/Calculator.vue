<template>
	<div id="calculator">
		<h1>BAP</h1>
		<ul class="brackets-list">
			<li class="bracket-item" v-for="b in brackets">
				<strong class="rate">{{ b.rate }}%</strong>
				<span class="single">Single: {{ b.single }}</span>
				<span class="joint">Joint: {{ b.joint }}</span>
			</li>
		</ul>
		<div class="result" v-if="result">
			<h2>Results</h2>
			<div class="data-group">
				<span>Buy again price: </span>
				<strong>${{ result.bap }}</strong>
			</div>
			<div class="data-group">
				<span>Pre-tax Gain: </span>
				<span>${{ result.bap }}</span>
			</div>
			<div class="data-group">
				<span>Tax amount: </span>
				<span>${{ result.taxAmount }}</span>
			</div>
			<div class="data-group">
				<span>Post-tax gain: </span>
				<span>${{ result.postTax }}</span>
			</div>
		</div>
		<form>
			<div class="form-body">
				<div class="input-group">
					<label>Tax Bracket</label>
					<input type="number" v-model="bracket">
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
				<button type="button" class="primary" @click="clear">Clear</button>
				<button type="button" @click="calculate">Calculate</button>
			</div>
		</form>
	</div>
</template>

<script src="./calculator.js"></script>

<style lang="less">
	@import './calculator.less';
</style>