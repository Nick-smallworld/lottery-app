import React from "react";

const LotteryOne = () => {
  const handleClick = function () {
    try {
      const formData = escapeHtml(document.getElementById("textarea").value);
      const arr = formData.split("\n");
      const filteredArr = arr.filter((item) => item != "");

      // 生成した配列からランダムに結果を一つ選び、結果をdivに表示する

      const randomIndex = Math.floor(Math.random() * filteredArr.length);
      const result =
        filteredArr != false
          ? filteredArr[randomIndex]
          : "入力データがありません";
      document.getElementById("result").innerHTML = result;
    } catch (error) {
      console.error(error);
    }
  };

  const clear = function () {
    textarea.value = "";
    document.getElementById("result").innerHTML = "";
  };

  return (
    <div>
      <p>くじ引きしたい選択肢を改行区切りで入力してください。</p>
      <form>
        <textarea
          id="textarea"
          name="textarea"
          rows="5"
          cols="40"
          class="w-full p-2 bg-white border border-gray-300 rounded"
        ></textarea>
        <div class="mt-4">
          <button
            type="button"
            id="submit"
            onClick={handleClick}
            class="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            くじを引く
          </button>
          <button
            type="button"
            id="clear"
            onClick={clear}
            class="bg-red-500 text-white px-4 py-2 rounded"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default LotteryOne;

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
