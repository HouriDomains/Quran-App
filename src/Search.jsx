import { useState } from "react";
import Verse from "./quran.json";
import "./styles.css";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [totalOccurrences, setTotalOccurrences] = useState(0);

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    const filtered = Verse.filter(
      (data) =>
        data.ayah_en.toLowerCase().includes(term) || data.ayah_ar.includes(term)
    );
    setFilteredData(filtered);

    const totalCount = Verse.reduce((count, data) => {
      const enMatches =
        data.ayah_en.toLowerCase().match(new RegExp(term, "g")) || [];
      const arMatches = data.ayah_ar.match(new RegExp(term, "g")) || [];
      return count + enMatches.length + arMatches.length;
    }, 0);
    setTotalOccurrences(totalCount);
  };

  return (
    <>
      <h1>Quran Search</h1>
      <div className="input-box">
        <input
          type="text"
          className="text-input"
          placeholder="Search Quran"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {searchTerm && (
        <div className="results">
          <p>Total Occurrences: {totalOccurrences}</p>
          {filteredData.map((data) => (
            <div className="box" key={data.id}>
              <p style={{ textAlign: "left" }}>
                {data.surah_name_transl} : {data.ayah_no} | {data.surah_name_ar}{" "}
                : {data.ayah_no} | {data.surah_no} : {data.ayah_no}
                <br />
              </p>
              <p style={{ textAlign: "right" }}>{data.ayah_ar}
                <p style={{ textAlign: "justify" }}>
                {data.ayah_en} </p>
              </p>
              <br />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
