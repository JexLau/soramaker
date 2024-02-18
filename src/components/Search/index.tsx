"use client";
import React, { useState } from 'react';
import { Container } from '../Container';

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    // 这里添加处理搜索逻辑
    // 比如发送请求到后端或API
    // 以及处理返回的数据
  };

  return (
    <section
      id="search"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Container className="relative">
        {/* <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>搜索</button> */}
        {/* <div>
          {searchResults.map((result, index) => (
            <div key={index}>{result}</div>
          ))}
        </div> */}
        <div>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-main-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Input Author Name"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500" id="email-description">
            If have any questions, please contact us.
          </p>
        </div>
      </Container>
    </section>
  );
}
