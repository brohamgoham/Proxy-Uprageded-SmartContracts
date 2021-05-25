const { ethers } = require('hardhat')

async function main() {
    const proxV2 = await ethers.getContractFactory("proxV2")
    let Prox = await upgrades.upgradeProxy("0x93C647E78E371226150A24F01751E474D3538Dd4", proxV2)
    console.log("prox upgrade is done:", Prox.address)

}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error)
    process.exit(1)
})
 