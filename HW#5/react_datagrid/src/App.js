import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';

// 1. 定義表格欄位 (對應 JSONPlaceholder API 回傳的格式)
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'userId', headerName: 'User ID', width: 130 },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Content', width: 400 },
];

function App() {
  // 2. 宣告 state 儲存 API 資料
  const [rows, setRows] = useState([]);

  // 3. 講義 P.45 要求：使用 useEffect 呼叫外部 API
  useEffect(() => {
    // 參考講義 P.42 的寫法，抓取 posts 的資料
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setRows(json); // 將抓到的 100 筆資料放進表格的狀態中
      })
      .catch((error) => console.error('抓取資料發生錯誤:', error));
  }, []); // 加上空陣列，確保只在初次載入時呼叫一次 API

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#1976d2' }}>HW5: React DataGrid API</h1>
      <p>學號：B1329037</p>
      
      {/* 4. 顯示 DataGrid 表格 */}
      <div style={{ height: 600, width: '100%', marginTop: '20px' }}>
        <DataGrid 
          rows={rows} 
          columns={columns} 
          pageSize={10} 
          checkboxSelection 
        />
      </div>
    </div>
  );
}

export default App;
