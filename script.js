document.addEventListener("DOMContentLoaded", function () {
  const totalBillInput = document.getElementById("money");
  const tipRangeInput = document.getElementById("tip");
  const tipAmountBox = document.querySelector(".box-1");
  const totalWithTipBox = document.querySelector(".box-2");
  totalBillInput.addEventListener("input", updateResults);
  tipRangeInput.addEventListener("input", updateResults);
  function updateResults() {
    const totalBill = parseFloat(totalBillInput.value) || 0;
    const tipPercentage = tipRangeInput.value;
    const tipAmount = (totalBill * tipPercentage) / 100;
    const totalWithTip = totalBill + tipAmount;
    tipAmountBox.querySelector("p").innerText = `$${tipAmount.toFixed(2)}`;
    totalWithTipBox.querySelector("p").innerText = `$${totalWithTip.toFixed(
      2
    )}`;
  }
});
// that is it
