import TrackerForm from "./TrackerForm";
import InfoBox from "./InfoBox";
import Map from "./Map";

function LeftContainer({countryInfo, getCountryData}) {

  return (
    <div className="app__left">
      <TrackerForm getCountryData={getCountryData} />

      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
        <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
        <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
      </div>

      <Map />
    </div>
  );
}

export default LeftContainer;
