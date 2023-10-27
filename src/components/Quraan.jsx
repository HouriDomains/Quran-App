import { useState } from "react";
import Verse from "../quran.json";
import "./components/styles.css";

function Quran() {
  const [selectedSurah, setSelectedSurah] = useState("");
  const [selectedAyah, setSelectedAyah] = useState("");
  const [ayahsToShow, setAyahsToShow] = useState([]);

  const handleSurahSelect = (e) => {
    setSelectedSurah(e.target.value);
    setSelectedAyah(""); 
  };

  const handleShowAllAyahs = () => {
    if (selectedSurah) {
      const selectedSurahData = Verse.filter(
        (data) => data.surah_name_transl === selectedSurah
      );
      setAyahsToShow(selectedSurahData);
    }
  };

  const highestAyahNo = ayahsToShow.reduce((max, data) => {
    return Math.max(max, data.ayah_no);
  }, 0);

  return (
    <>
      <h1>Al - Quran</h1>
      <div className="surah-selector">
        <select onChange={handleSurahSelect}>
          <option value="">Select a Surah</option>
          {Verse.reduce((surahs, data) => {
            if (!surahs.includes(data.surah_name_transl)) {
              surahs.push(data.surah_name_transl);
            }
            return surahs;
          }, []).map((surah, index) => (
            <option key={index} value={surah}>
              {`${index + 1}. ${surah}`}
            </option>
          ))}
        </select>
        {selectedSurah && (
          <div>
            <input
              type="number"
              placeholder="Select Ayah"
              value={selectedAyah}
              onChange={(e) => setSelectedAyah(e.target.value)}
            />
            <button onClick={handleShowAllAyahs}>Show All Ayahs</button>
          </div>
        )}
      </div>

      {ayahsToShow.length > 0 && selectedAyah && selectedAyah <= highestAyahNo && (
        <div>
          <h2>{`${selectedSurah} (${Verse.findIndex(
            (data) => data.surah_name_transl === selectedSurah
          ) + 1})`}</h2>
          <p>Selected Ayah: {selectedAyah}</p>
          {ayahsToShow
            .filter((ayah) => ayah.ayah_no >= selectedAyah)
            .map((ayah, index) => (
              <div key={index}>
                <p>
                  Ayah {ayah.ayah_no}: {ayah.ayah_ar} <br />{ayah.ayah_en}
                </p>
              </div>
            ))}
        </div>
      )}
    </>
  );
}
export default Quran;
