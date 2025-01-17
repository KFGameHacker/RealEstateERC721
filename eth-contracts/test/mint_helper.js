var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var Verifier = artifacts.require('Verifier');

var proof = {
    "proof": {
        "a": ["0x0160d2b3f85f2ca6e91065d8ba357d632358613218a612b80d5ac4887dd260e7", "0x17c050cc39ac395be25b153c0bd0b805bb765b3a9b4aad63f45007c04d608133"],
        "b": [["0x200d92f4e3eee1caf93b38fb3da3e195748d98bee3f43cd51af56aa436b44985", "0x28a8433d61b15e9f21610f4121b506f34ee0e23277d749a3ac64c7389bfdd14f"], ["0x00177673e0b08cdfb5246c96dcdf2bf34f41c73022115c58f741814ce1e29058", "0x1df1487a44712e7881ecafa844767ef33b02d15891b1ff566084bcc717b03e4b"]],
        "c": ["0x18891e505d3d6cb6af021aa83070ca7df400c888d9fab30051581b391c6a9e35", "0x0ffec9030d18f7a5cb5d7d5de57bdd49e3dbf7e53102b4ac3faf4b9433ca0961"]
    },
    "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000004", "0x0000000000000000000000000000000000000000000000000000000000000001"]
}

contract('SolnSquareVerifier', accounts => {
	//read first account
    const account = accounts[0];
    const account2 = accounts[1];
    //read from proof json
    const a = proof["proof"]["a"];
    const b = proof["proof"]["b"];
    const c = proof["proof"]["c"];
    const correctProofInput = proof["inputs"];

    before(async function () {
        const verifier = await Verifier.at("0x8895c95A99a9C34e86C3473443Bd7d903c8aDd25");
        console.log(verifier.address);
        this.contract = await SolnSquareVerifier.at("0xCC539Dc3fC1eb46844844dc4B0Df7bA609F78c81",verifier.address, {from: account});
        console.log(this.contract.address)
    });
    //Test if an ERC721 token can be minted for contract and a new solution can be added for contract - SolnSquareVerifier
    it('Test if an ERC721 token can be minted for contract a new solution can be added for contract - SolnSquareVerifier', async function () {
        for(let i=10;i<=20;i++){
            await this.contract.mint(account,i,{from: account});
        }
    });

})
