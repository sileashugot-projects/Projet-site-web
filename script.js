function MoneyConverter(valNum){
    document.getElementById("outputBitcoin").innerHTML=valNum/41318.01
    document.getElementById("outputEthereum").innerHTML=valNum/3358.36
}
function MoneyConverterBit(valNum){
    document.getElementById("outputEuroBit").innerHTML=valNum*41318.01
    document.getElementById("outputEthereumBit").innerHTML=valNum*41318.01/3358.36
}
function MoneyConverterEth(valNum){
    document.getElementById("outputEuroEth").innerHTML=valNum*3358.36
    document.getElementById("outputBitcoinEth").innerHTML=valNum*3358.36/41318.01
}
function topFunction() {
    document.documentElement.scrollTop = 0;
}
