const { expect } = require("chai");

let prox 
let box 

describe('prox (proxy', function () {
  beforeEach(async function() {
    prox = await ethers.getContractFactory("prox")
    box = await upgrades.deployProxy(prox, [42], { initializer: 'storeValue' })
  })

  //test 1 
  it('retrieve returns a value previously initialized', async function () {
    expect((await box.retrieve()).toString()).to.equal('42')
  })
  
})