<template>
	<div id="calculator">
		<header>
			<h1>BAP</h1>
			<p>Buy Again Price</p>
		</header>
		<div class="right">
			<section class="tax-info">
				<h2>Tax</h2>
				<div class="data-group">
					<span>Tax bracket: </span>
					<strong>{{ taxBracket }}%</strong>
					<p>According to your salary</p>
				</div>
				<div class="data-group space" v-if="longTerm">
					<span>Actual Tax Rate:</span>
					<strong>{{ taxRate }}%</strong>
					<p>You&rsquo;re taxed less since you held the stock for more than 1 year.</p>
				</div>
			</section>
			<section class="result">
				<h2>Results</h2>
				<div class="data-group" v-if="costBasis">
					<span>Buy Price: </span>
					<strong>{{ costBasis | currency() }}</strong>
				</div>
				<div class="data-group" v-if="costBasis">
					<span>Sell Price: </span>
					<strong>{{ sellPrice | currency() }}</strong>
				</div>
				<div class="data-group space">
					<span>Pre-tax Gain: </span>
					<strong>{{ result.preTax | currency() }}</strong>
				</div>
				<div class="data-group">
					<span>Tax amount: </span>
					<strong class="red">{{ result.taxAmount | currency() }}</strong>
				</div>
				<div class="data-group">
					<span>Post-tax gain: </span>
					<strong>{{ result.postTax | currency() }}</strong>
				</div>
				<div class="data-group space bap">
					<span>Buy again price: </span>
					<strong>{{ result.bap | currency() }}</strong>
					<p>This is the break even price, if you want to get back in the game.</p>
				</div>
			</section>
		</div>
		<div class="calculator">
			<form>
				<div class="form-body">
					<div class="input-group">
						<label>Annual Salary</label>
						<p>
							This is used to find out your

							<a class="tooltip">
								<span class="tooltip-label">tax rate</span><div class="tooltip-content brackets">
									<ul class="brackets-list">
										<li class="bracket-item" v-for="b in brackets">
											<strong class="rate">{{ b.rate }}%</strong>
											<span class="single">Single: {{ b.single }}</span>
											<span class="joint">Joint: {{ b.joint }}</span>
										</li>
									</ul>
								</div>
							</a>.
						</p>
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
					<button type="button" class="primary" @click="clear">Clear</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script src="./calculator.js"></script>

<style lang="less">
	@import './calculator.less';
</style>