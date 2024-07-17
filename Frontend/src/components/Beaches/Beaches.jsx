import "../Beaches/Beaches.css";
import beach from "../../assets/calahonda.jpg";
function Beaches() {
  return (
    <>
      <div className="beach-container">
        <div className="left-column">
          <div className="paragraph">
            I och med Nerjas nio km långa kust finns det många små stränder i
            vikarna nedanför klipporna. Eftersom vikarna är formade som de är,
            är vattnet lugnt och stränderna är inte utsatta för hårda vindar.
            Det finns restauranger och kiosker utspridda längs stränderna. Nytt
            för 2019 (juni) är att ett promenadstråk öppnar så det går att gå
            mellan Playa de Burriana och Balcon de Europa!
            <br />
            <br />
            <strong>Playa de Burriana</strong>
            <br />
            Den mest populära stranden är Burriana Beach och passar väldigt bra
            för barnfamiljer i och med att det finns lekplatser och
            volleybollnät. Här finns klippor på båda sidorna samtidigt som det
            finns skogsområden och trädgårdar. Här kan man även hyra trampbåtar,
            solstolar och parasoller. Det finns även duschar och restauranger
            längs strandpromenaden. Stranden har även fått blå flagg.
            <br />
            <br />
            <strong>El Playazo</strong>
            <br />
            Stranden El Playazo ligger till väster om centrala Nerja. Här är
            sanden mörk och det finns duschar, solstolar, parasoller och en del
            restauranger utmed stranden. Stranden har fått Blå Flagg.
            <br />
            <br />
            <strong>La Torecilla</strong>
            <br />
            Stranden La Torecilla är en liten strand. I och med den steniga och
            kuperade terrängen kan man inte gå hit genom kusten utan måste gå
            längs inlandet på vägen ner mot stranden. Här finns strandkaféer,
            kiosker och några solstolar och parasoller, men i och med att
            stranden är så liten går det inte att ha fler faciliteter här.
            Strandens namn kommer från ett torn som byggdes här för att skydda
            Nerja från pirater. Tornet förstördes under kriget men har senare
            återställts.
            <br />
            <br />
            <strong>La Caletilla</strong>
            <br />
            <span>
              Stranden La Caletilla är en väldigt liten strand. Den ligger till
              väster om Balcon de Europa. La Caletilla ligger alldeles framför
              Hotel Balcon de Europa, även om det ser ut som att den tillhör
              hotellet så är det en allmän strand. Här finns kiosker, solstolar
              och parasoller. Stranden blir oerhört vacker i och med de fina
              klippformationerna och det helt otroligt kristallklara vattnet.
              Stranden ligger ju också nära till allt genom att den är mitt i
              centrum.
            </span>
            <br />
            <br />
            <strong>​Playa El Salon</strong>
            <br />
            <span>
              Playa El Salon ligger till väster om Balcon de Europa. Dit tar man
              sig genom en brant gångväg som sicksackar sig ner till stranden.
              Här finns ingen restaurang men en kiosk. Bakom stranden ligger ett
              bostadsområde. Stranden är 200 meter med 20 meter sand.
            </span>
            <br />
          </div>
        </div>
        <div className="right-column">
          <div className="paragraph">
            <strong>Calahonda, Chorillo och Carabeo</strong>
            <br />
            <span>
              Detta är tre små stränder som ligger öster om Balcon de Europa.
              Stränderna ligger åtskilda på grund av berg och stenblock. Hit
              kommer man endast via gångstigar som går över klippor och berg.
              Det är inte så lämpligt för barnfamiljer eller rullstolsbundna att
              ta sig till dessa stränder. Stränderna är populära för snorkling
              och dykning på grund av de stilla och klara vattnet. Här finns
              solstolar, parasoller och restauranger.
            </span>
            <br />
            <br />
            <strong>Playa de Maro</strong>
            <br />
            <span>
              Strax öster om Nerja finns en by som heter Maro. Här hittar du
              stranden Playa de Maro och detta är en av de bästa stränderna i
              Andalusien och även i hela Spanien. Viken ligger lite avskilt med
              klippor runt och vacker växtlighet. Här är det populärt för
              snorklare och sportdykare i och med det turkosa klara vattnet med
              massor av fiskar och klippformationen längs udden. Det är ett bra
              ställe att bada på i och med de varma medelhavsströmmarna. Här kan
              man hyra solstolar och parasoller och det finns duschar och
              toaletter. Stranden har även fått Blå Flagg. Vid stranden finns
              även en kiosk och en beachbar. Man kan ta sig med bil till denna
              strand men det är en väldigt liten och brant väg. Vid änden av
              vägen kommer man till en parkeringsplats som under sommartid
              snabbt blir full och man parkerar istället längs med vägen ner.
            </span>
            <div className="image">
              <img src={beach} alt="beach" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Beaches;
