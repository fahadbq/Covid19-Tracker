import { useState } from "react"
import TrackerForm from "./TrackerForm";
import InfoBox from "./InfoBox";
import Map from "./Map";
import { prettyPrintStat } from '../../helperFunc/util'

function LeftContainer({ countries, countryInfo, getCountryData, mapCenter, mapZoom}) {
  const [ casesType, setCaseType ] = useState("cases")

  return (
    <div className="app__left">
      <TrackerForm getCountryData={getCountryData} countries={countries} />

      <div className="app__stats">
        <InfoBox 
          isRed
          active={casesType === "cases"}
          onClick={(e) => setCaseType("cases")}
          title="Coronavirus Cases" 
          cases={prettyPrintStat(countryInfo.todayCases)} 
          total={prettyPrintStat(countryInfo.cases)} 
        />

        <InfoBox 
          active={casesType === "recovered"}
          onClick={(e) => setCaseType("recovered")}
          title="Recovered" 
          cases={prettyPrintStat(countryInfo.todayRecovered)} 
          total={prettyPrintStat(countryInfo.recovered)} 
        />

        <InfoBox 
          isRed
          active={casesType === "deaths"}
          onClick={(e) => setCaseType("deaths")}
          title="Deaths" 
          cases={prettyPrintStat(countryInfo.todayDeaths)} 
          total={prettyPrintStat(countryInfo.deaths)} 
        />
      </div>

      <Map countries={countries} center={mapCenter} zoom={mapZoom} casesType={casesType} />
    </div>
  );
}

export default LeftContainer;
