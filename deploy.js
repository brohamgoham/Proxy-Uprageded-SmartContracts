const { ethers } = require('hardhat')

async function main() {
    const prox = await ethers.getContractFactory("prox")
    console.log("Deploy proxy")
    const Prox = await upgrades.deployProxy(prox, [42], { initializer: 'storeValue' })
    console.log("prox deployed to:", Prox.address)

}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error)
    process.exit(1)
})
 