import React from 'react';

const MyComponent = () => {
  const handleClick = function() {
    const tmp = document.getElementById('textarea').value
    const arr = tmp.split('\n')
    const filteredArr = arr.filter(item => item !== '');

    // 生成した配列からランダムに結果を一つ選び、結果をdivに表示する
    const randomIndex = Math.floor(Math.random() * filteredArr.length);
    const result = filteredArr[randomIndex]
    console.log(result)
    document.getElementById('result').innerHTML = result
  }

  const clear = function(){
    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', () => {
        textarea.value = '';  
        document.getElementById('result').innerHTML = ''
        }
    );
  }

  return (
    <div>
        <h1>くじ</h1>
        <p>くじ引きしたい選択肢を改行区切りで入力してください。</p>
        <form>

       <textarea id="textarea" name="textarea" rows="5" cols="40"></textarea>
        <div>
            <button type="button" id="submit" onClick={handleClick}>くじを引く</button>
        <button type="button" id="clear" onClick={clear}>クリア</button></div>
        </form>
        <p>結果</p>
        <div id="result" ></div>
    </div>

  )
}

export default MyComponent;