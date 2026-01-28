body {
  font-family: 'Microsoft JhengHei', 'Helvetica', sans-serif;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
}

.container {
  text-align: center;
  background: rgba(255, 255, 255, 0.85);
  padding: 50px 40px;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  max-width: 90%;
}

h1 {
  font-size: 2.8rem;
  margin-bottom: 10px;
  color: #e91e63;
}

.date-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 35px;
  flex-wrap: wrap;
}

.date-btn {
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #555;
  transition: all 0.2s;
}

.date-btn:hover {
  background: rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
}

.date {
  font-size: 1.9rem;
  color: #333;
  margin: 0;
  padding: 0 20px;
  white-space: nowrap;
}

@media (max-width: 480px) {
  .date-row {
    gap: 15px;
    justify-content: space-around;
  }
  .date {
    padding: 0 30px;
    font-size: 1.7rem;
  }
}

#result {
  font-size: 2.4rem;
  margin: 40px 0;
  color: #d81b60;
  font-weight: bold;
  line-height: 1.7;
}

.advice-line {
  margin-bottom: 1.2em;
  text-align: left;
}

.advice-line .label {
  display: block;
  margin-bottom: 0.3em;
  color: #555;
  font-size: 2.1rem;
}

.advice-line .result-line {
  display: block;
  font-size: 2.4rem;
}

.advice-line .color-part,
.advice-line .or {
  display: inline;               /* 確保「黑 或 藍」同一行 */
  vertical-align: baseline;
}

.advice-line .or {
  color: #666;
  margin: 0 0.4em;
  font-weight: normal;
}

/* 獨立顏色 class */
.color-black       { color: #111111; }
.color-blue        { color: #1e40af; }
.color-green       { color: #15803d; }
.color-big-yellow  { color: #d97706; }
.color-big-red     { color: #b91c1c; }
.color-light-yellow{ color: #fbbf24; }
.color-light-red   { color: #f87171; }
.color-mud-yellow  { color: #a0785a; }
.color-brown       { color: #78543d; }
.color-white       { color: #e5e5e5; }
.color-gold        { color: #d4af37; }
.color-red         { color: #ef4444; }
.color-light-green { color: #6ee7b7; }
.color-deep-green  { color: #065f46; }

.tip {
  font-size: 1.4rem;
  color: #777;
}
