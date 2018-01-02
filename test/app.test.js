var expect = require('chai').expect
var printName = require('../app.js')

describe('printName()', function(){
	it("harus mengembalikan nama belakang terlebih dahulu", function(){

		var hasil = printName("Mosa", "Arya");
		expect(hasil).to.equal("Arya, Mosa")

	})

	it("harus mengembalikan nama belakang terlebih dahulu", function(){

		var hasil = printName("Arya", "Nugraha");
		expect(hasil).to.equal("Nugraha, Arya")

	})

});