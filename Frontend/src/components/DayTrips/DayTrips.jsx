import "./DayTrips.css";
import ski from "../../assets/esquiar-en-sierra-nevada.jpg";
import ski2 from "../../assets/Sierra-Nevada.jpg";
import ski3 from "../../assets/ski3.png";
import ski4 from "../../assets/ski4.jpg";
import hiking from "../../assets/costa_sunshine_nerja_rio_chillar1.jpeg";
import hiking2 from "../../assets/almijarra-naturpark.jpg";
import hiking3 from "../../assets/hiking3.jpg";
import hiking4 from "../../assets/hiking4.jpg";

import Frigiliana from "../../assets/Frigiliana.jpg";
import Frigiliana2 from "../../assets/calle-de-Frigiliana.jpg";
import Frigiliana3 from "../../assets/frigiliana_donkey.jpg";


function DayTrips() {
  return (
    <>
      <div className="excursion-container">
        <div className="section">
          <h1>A unique climate, skiing and tropical vegetation</h1>
          <br />
          <p>
            Nerja is located on the coast where the Costa del Sol merges into
            the Costa Tropical. The high mountains that surround the city
            combined with the proximity to the coolness of the sea help to
            create a protected zone with pleasant summers and mild winters - a
            unique climate in Europe. It rarely gets above 30 degrees in the
            summer, and during the winter the temperature rarely drops below 15
            degrees. Nerja is extremely fertile, and colorful flowers and
            tropical fruits such as avocado, papaya and mango spread out and
            paint an unbeatable exotic setting. Here there is proximity to
            beautiful hiking trails in the Almijara mountains, water sports,
            golf and diving. The city is also only 1.5 hours from the Sierra
            Nevada and its wonderful ski slopes. This makes Nerja and the Costa
            del Sol one of the few places in the world where you can ski during
            the day and take a dip in the sea at night!
          </p>
        </div>
        <div className="section">
          <h1>Sierra Nevada</h1>
          <div className="pictureAndText">
            <div className="picture">
              <div className="image">
                <img src={ski} alt="ski" />
              </div>
              <div className="image">
                <img src={ski2} alt="ski" />
              </div>
              <div className="image bigDisplayNone">
                <img src={ski4} alt="ski" />
              </div>
              <div className="image bigDisplayNone">
                <img src={ski3} alt="ski" />
              </div>
            </div>
            <div className="text">
              <p>
                For wonderful skiing, you can easily get there by car from Nerja
                and and the trip takes about 90 minutes and the ski season
                extends from December to April. Sierra Nevada, Andalusian
                mountain range in the south Spain and Europe's southernmost ski
                resort. The ski resort is located at the mountain range's next
                highest peak, <strong>Pico del Veleta</strong>, 3,398 m a.s.l.
                The resort Sierra Nevada itself is located at an altitude of
                approx. 2,100 meters. The the southern location at high altitude
                offers good snow supply and very good sun chances. The resort
                was built in the 60s and 70s for ski tourism and is thus a
                practical and well-designed ski resort. Here you will find
                everything you need for a successful and slightly different
                skiing holiday! Since ski areas are at such a high altitude, the
                snow supply is good and high during the winter months. It is
                also worth knowing that there is an excellent facility with snow
                cannons, among the best in Europe.
              </p>
              <p>
                In Sierra Nevada has 18 green pistes, 40 blue, 50 red and 8
                black slopes. About thirty modern lifts take you around the
                system. In short – something for everyone. There are good
                opportunities for off-piste skiing via the lift system and the
                area is known for relatively low avalanche risk. The ski area is
                divided into several smaller areas:
                <strong>
                  Area Borreguiles, Area Cahuchiles – Parador, Area Laguna Las
                  Yeguas
                </strong>
                and <strong>Area Loma de Dílar</strong> are the largest. The
                lift system is modern and of high class. The ski area is similar
                to the larger Swedish ones the areas such as Åre and Sälen in
                their design and offer pistes for everyone, from beginners to
                advanced skiers.
              </p>
            </div>
          </div>
          <p>
            There is also a large park, Superpark Sulay,r where you can test
            challenging half-pipes, jumps and rails for both skiers and
            boarders. Here you will find Spain's largest half-pipe at a whopping
            6 by 165 meters. It is very well maintained and well groomed.
          </p>
          <p>
            Sierra Nevada, Andalusia mountain range in southern Spain and
            Europe's southernmost ski resort. The ski resort is located at the
            mountain range's next highest peak, Pico del Veleta, 3,398 m above
            sea level.
          </p>
          <p>
            Själva orten Sierra Nevada ligger på ca 2 100 meters höjd. Det
            sydliga läget på hög höjd erbjuder god snötillgång och mycket goda
            solchanser. Orten är byggd på 60- och 70-talet för skidturism och är
            således en praktisk och väldesignad skidort. Här hittar du allt du
            behöver för en lyckad och lite annorlunda skidsemester!
          </p>
          <ul>
            <h3>Fakta:</h3>
            <li>
              The facility in the village is called Pradollano (located at 2,100
              meters)
            </li>
            <li>
              Most of the ski area is on the northern slopes of Veleta, which is
              also the third highest peak in mainland Spain
            </li>
            <li>
              Located in the Penibético mountain range in the Sierra Nevada
              National Park and only 27 km from the center of Granada, you will
              find the lowest point in the resort at 2,100 meters and the
              highest at just over 3,300 meters above sea level
            </li>
            <li>
              The facility offers 115 slopes with more than 105 km of
              wonderfully ski-friendly slopes, of which 4,000 meters are divided
              into blue slopes, 9,000 meters into black slopes, 5,000 meters of
              red and 1,600 meters of green slopes. In addition, there are ski
              tracks for cross-country and snowshoeing.
            </li>
            <li>
              The ski lifts have a capacity for 45,555 skiers per hour. There
              are 2 large cable cars, 17 chair lifts, 2 T-bar lifts, 2 magic
              carpets and a tow lift
            </li>
            <li>
              Today you can find a modern artificial snow system consisting of
              353 cannons that cover more than 35 km of ski slopes in total
            </li>
            <li>
              There is a huge freestyle superpark, with a halfpipe and a total
              of 70 obstacles, known as the Sulayr park
            </li>
            <li>
              The resort is run by a private/public company and last hosted the
              Alpine WC in 1996 and Sierra Nevada has also been chosen to host
              the winter games "World University Games" in February 2015.
            </li>
          </ul>
        </div>
        <div className="section">
          <h1>Hiking</h1>
          <div className="pictureAndText">
            <div className="picture">
              <div className="image">
                <img src={hiking2} alt="hiking" />
              </div>
              <div className="image">
                <img src={hiking} alt="hiking" />
              </div>
              <div className="image bigDisplayNone">
                <img src={hiking3} alt="hiking" />
              </div>
              <div className="image bigDisplayNone">
                <img src={hiking4} alt="hiking" />
              </div>
            </div>
            <div className="text">
              <p>
                Two protected areas border the Nerja settlement -
                <strong> Sierra de Tejada and Almijarra Natural Park </strong>,
                as well as the
                <strong> Acantilados de Maro-Cerro Gordo natural area</strong>.
                All locations offer fantastic hikes.
              </p>
              <p>
                El Cielo, which correctly translates to{" "}
                <strong>"The Sky"</strong>, is the highest mountain along the
                coast in the area at 1,508 meters. A hike to the top gives
                adrenaline to your senses. The mountain is easily accessible and
                offers unparalleled views of the surrounding landscape. On a
                clear and fine day you will have an unobstructed view over the
                entire Costa del Sol, all the way from Almunecar to Malaga, as
                well as all the high peaks of the Sierra de Tejeda and large
                parts of the North African coastline.
              </p>
              <p>
                You need to be trained and watch out but hiking up to El Cielo
                is an experience you will never forget.
              </p>
              <br />
              <h3>
                Rio Chillar, Rio Higueron, Sierra de Tejada, Almijara naturpark
                m.m.
              </h3>
              <p>
                As the city has such an unusually beautiful location, wedged
                between the mountains and the sea, and inherent harmony in both
                nature and the population, it has also become very popular to
                organize Yoga and meditation trips and hiking trips to the area.
                The most famous hiking trail in Nerja is the Rio Chillar. The
                surroundings are spectacular and teeming with birds,
                butterflies, dragonflies, wild flowers and cane sugar. Rio
                Chillar is also unique in that the trail is covered in a lot of
                shade, plus the river cools down the hikers.
              </p>
            </div>
          </div>
          <p>
            Other very popular areas for getting out into nature and hiking are
            the protected natural areas of Sierra de Tejada and the Almijara
            Natural Park.
          </p>
          <p>
            The highest coastal mountain in the area is El Cielo (which means
            "the sky") and it is 1508 meters above sea level. The mountain is
            easily accessible (well) and must be climbed if you want to witness
            the most beautiful views in Europe! On a clear day you can see the
            entire Costa del Sol from the mountain, from Almunecar to Malaga –
            as well as the nearby mountain peaks and the North African
            coastline.
          </p>
          <br />
          <h3>Details of Rio Chillar and Rio Higueron</h3>
          <p>
            The two most common hiking trails are the Rio Higueron which is dry
            at certain times of the year and the Rio Chillar where you walk in
            the river plus mountains. Rio Higueron takes 1.5-2 hours and Rio
            Chillar takes 4-6 hours with a lot of mountains at the end. In
            winter, Rio Chillar is recommended as there is less water there
            then.
          </p>
          <p>
            <strong>Rio Cillar</strong>: Do this hike in the morning and it is
            usually not slippery and the climb is "gentle". For a slightly
            shorter hike, you can drive up to the road that goes under the
            highway, a little way up the street there is a large parking lot.
            When you get to the first dam, which is just after you go through
            high rock walls, you have about 1 hour left to the bigger water
            fall, clearly worth going all the way. Bring coffee and water and
            wear good shoes that can withstand water. And of course swimwear and
            a small towel so you can swim in the waterfall.​
          </p>
          <p>
            <strong>Rio Higueron</strong>: A very popular activity is to hike in
            the riverbed and gorge up to the mountain village of Frigiliana,
            alternatively from Frigiliana down to Nerja. You really get out into
            nature and get to experience walking in the river, beautiful nature
            with lots of flowers and a little excitement at some passages. In
            Frigiliana you have a nice tour of the village, which won the prize
            as Spain's most beautiful. Lunch is recommended at a nice little
            restaurant with a terrace and a view, e.g. Gustos. You can either
            take a bus to/from Nerja to/from Frigiliana or a taxi. The trip is
            about 5 km and takes 1.5-2 hours depending on the pace you choose to
            walk.
          </p>
          <br />
          <h3>Caminito del Rey</h3>
          <p>
            <strong>Caminito del Rey</strong> – The King's Path, is located at
            El Chorro north of Malaga. What until a few years ago was considered
            the world's most dangerous hiking trail, now qualifies as one of
            Andalusia's new major tourist attractions.
          </p>
          <p>
            The trail was originally a way for workers at a power station,
            located in a deep gorge, to transport themselves and materials
            between different parts of the gorge. The trail fell into disrepair
            and became a dangerous playground for adventurers and "daredevils".
            The Spanish authorities were eventually forced to close the trail
            after several people plunged to their deaths. After 4 years of
            restoration work, the new Caminito del Rey was completed in April
            2015. Now a very safe, but still highly dramatic, walk along the
            vertical slopes of the gorge.
          </p>
          <br />
          <h3>Tips for your visit to Caminito del Rey</h3>
          <p>
            Order tickets online well in advance of the visit and print the
            ticket at home. Some periods are fully booked for weeks ahead.
            Entradas Ultima Hora is ordering tickets for the next few days and
            Entradas General later on.
          </p>
          <p>
            It is well signposted, but also poorly. Is Caminito del Rey on signs
            both to the start at the top and to the end at the bottom. You have
            to start at the top because the trail is one-way. So follow signs
            Caminito del Rey Norte, not Sur.
          </p>
          <p>
            From the parking lot to the start of the trail, it is between 2 and
            3 km of hiking, depending on where you can find parking. This takes
            about 30 – 45 minutes, and you should be at the start about 30
            minutes before your entrance time. Take this into account when
            adjusting time. There is a parking lot at the beginning when you get
            close, but more further on. Admission takes place with approx. 50
            people every quarter.
          </p>
          <p>
            The trail itself takes about 2 hours to hike. No high-heeled shoes,
            no flip flops, no dogs, etc. Make sure you have a return journey to
            the car park on your pre-ordered ticket. The buses run approximately
            every 30 minutes, sometimes more often if there are many people. The
            trail itself is not difficult to walk. However, the path to the
            trail is a bit more difficult. If you are afraid of heights, the
            trail might be a little difficult, but you can always hold on to the
            railing along the mountain, but you have to cross the last bridge.
            Once you have reached the end station and left your helmet, it is
            about 1 km to the return bus. It is poorly signposted there, but the
            bus comes to the railway station.
          </p>
          <a href="http://www.caminitodelrey.info/en/">
            <strong> http://www.caminitodelrey.info/en/</strong>
          </a>
          <p></p>
        </div>
        <div className="section">
          <br />
          <h1>Running</h1>
          <br />
          <p>
            It is very popular to walk or jog early in the morning in Nerja. If
            you are not satisfied with running along the N-340 which runs
            through the whole of Nerja, Anders Kleist gives tips on more
            advanced running sessions:
            <a href="http://springlfa.se/pro-life/">
              <strong>http://springlfa.se/pro-life/</strong>
            </a>
            Five good passes from Anders:
          </p>
          <ul className="numbered-list">
            <li>
              8km 500hm climb up to the foot of El Cielo. Threshold intervals
              steep slope on the program. First run wrong path 5min bonus
              interval. Then 10min (1km, 300hm) + 10min (1km, 270hm) + 5min
              (running wrong again) +15min (climbing, the path no longer exists,
              reaching the top at 1500m). After that the legs just shook at the
              top and it was 12 long rocky demanding km home. Total 3h.
            </li>
            <li>
              Asphalt long pass 35km. Begins with tough legs, the road is hilly.
              Gets to the first mile in 42min, a 2km hill with 150hm. Second
              mile of 42 another 2km hill. Then a fifth in 21 with another 2km
              hill and finish with a 37min mile after picking up the pace with
              7km to go, where there was also such a damn hill. Total 2.22 and
              around 1000hm.
            </li>
            <li>
              Track intervals (400-800-1200-1600)*2, 3min speed + 3km in 3.10.
            </li>
            <li>
              Peak ride towards Navachica. Discovered after 1.48h that it was a
              long way to go, turns up, takes Almenjedo (1530m) and rolls home.
              A total of 4 hours and a lot of height meters and rock scrambling.
            </li>
            <li>
              The ski lifts have a capacity for 45,555 skiers per hour. There
              are 2 large cable cars, 17 chair lifts, 2 T-bar lifts, 2 magic
              carpets and a tow lift
            </li>
            <li>
              La Maroma. The area's highest mountain. Took the car to the foot
              itself, parked, ran a little wrong. But then it was just me and
              the other goats who set off for the top. At the top it was ashen,
              but 2080 möh sat where it should anyway. Good thing I took the
              opportunity to take it because now the top looks dangerously
              white...
            </li>
          </ul>
          <p>
            Right at the entrance to Maro, there is an outdoor gym. If you walk,
            cycle or drive from Nerja, you will find it easily!
          </p>
          <p>
            On this website you will find lots of running routes in Nerja:
            <a href="http://www.mapmyrun.com/es/nerja-andalusia/">
              <strong>http://www.mapmyrun.com/es/nerja-andalusia/</strong>
            </a>
          </p>
          <p>
            This website also has running routes:
            <a href="https://www.wikiloc.com/trails/running/spain/andalusia/nerja">
              <strong>
                https://www.wikiloc.com/trails/running/spain/andalusia/nerja
              </strong>
            </a>
          </p>
        </div>
        <div className="section">
          <br />
          <h1>Biking</h1> <br />
          <p>
            A few hundred meters from the apartment is Nerja's best bike rental
            <a href="https://www.xbikenerja.com/english/home/">
              <strong>https://www.xbikenerja.com/english/home/</strong>
            </a>
          </p>
          <p>
            On facebook there is a group called "Nerja & Torrox Coasters". Join
            there and there are tips on cycle routes and also events where you
            can participate and cycle in a group.{" "}
            <a href="https://www.facebook.com/groups/1983726098579656/">
              <strong>https://www.facebook.com/groups/1983726098579656/</strong>
            </a>
          </p>
          <p>The group is in English and here is a description:</p>
          <br />
          <h3>About the group Introduction:</h3>
          <p>
            NTC group was formed out of a common interest in safe, gentle, and
            regular road cycling events with friends including a social aspect.
            The format typically is: flat, uphill, coffee, downhill, Tapas/beer
            – conversations and laughs included!
          </p>
          <p>
            NTC members ride together and take safety seriously, looking out for
            each other as we discover the beautiful coastline and countryside.
            We also try different cafes and tapas bars (and we have some
            favourites). If this approach to road cycling interests you, then
            why not join us. If you are new to road cycling or making your way
            back after time out, our events may be ideal.
          </p>
          <p>
            All riders take part in the group runs at their own risk. Consider
            your own insurance needs. In particular ensure that you have Third
            Party (Public Liability) insurance that covers you whilst cycling.
            Although this is not a legal requirement, the current "sue everyone
            for everything" attitude makes insurance essential.
          </p>
          <p>
            All riders capable of riding profile below are welcome! whether
            permanent residents or occasional visitors. Cycling group for
            coasters not racers. See 'Events' for next rides which will be
            typically Tuesdays and Fridays depending on weather. There is no
            membership fee. Road bikes or hybrid bikes suitable for most rides.
            The actual route is determined by the ride leader on the day. Road
            bike surfaces, ride 50 to 80 km, 20 ish kmh average, hills to 8%
            typical, coffee half way, tapa/beer at the end. OR Flat, uphill,
            coffee, downhill, coast, tapa/beer – 4 to 5 hours in total.
          </p>
          <br />
          <h3>Riding with us:</h3>
          <p>
            Group rides start Tuesdays and Fridays at 09:30 from the Paraiso
            Circle (Punta Lara/Tropicana Circle) on N340 west of Nerja, 300m
            after The Marinas Hotel. Riders from further afield can leave their
            cars here. Rides that go via Torrox Costa can be met at the main
            Torrox Costa/Pueblo circle in the Aldi car park at 09:45. Be sure to
            join at one of the 2 start points or make specific arrangements
            through this Facebook page or Facebook Messenger to meet along the
            route. You should always let us know you intend to ride through this
            Facebook page (comment or click ‘Going’) or Facebook Messenger as we
            may not wait at a start point once all ‘known’ riders have arrived.
          </p>
          <br />
          <h3>Safety:</h3>
          <p>
            Helmets must be worn. When groups become spread or detached, we
            always wait at the next junction. Only ride 2 abreast when the
            traffic is light and it is safe to do so. Please carry your EHIC or
            Residency ID or proof of medical insurance. For further guidelines
            on safety and etiquette, see 'Albums' (click 'Photos' then 'Albums')
            which contains typical cycling tips on safety, etiquette and risk
            management
          </p>
          <br />
          <h3>Joining:</h3>
          <p>
            When joining the NTC group, please provide your contact mobile
            number and have this phone with you and switched on during rides.
            All riders to also provide an emergency contact number (someone who
            knows important details). All details provided are kept in strictest
            confidence. Här är tips på en cykeltur: Cykla upp till Frigiliana
            fortsätt förbi F och ta vägen åt vänster och fortsätt på slingrande
            vägar och kom ner bakom Torrox Pueblo, läge för lunchstopp i denna
            charmiga by, sedan rullar ni ner mot Torrox costa och kustvägen
            tillbaka mot Nerja.
          </p>
        </div>
        <div className="section">
          {" "}
          <br />
          <h1>Golf</h1> <br />
          <p>
            There are 4 fine golf courses near Nerja, we mention them below:
          </p>
          <br />
          <h3>Baviera Golf 18 holes, par 71</h3>
          <p>
            Get here: From Nerja, take the highway towards Malaga, drive about
            15 minutes, take the exit at Caleta de Velez, here is this nice
            course by the Mediterranean Sea.
          </p>
          <br />
          <h3>Añoreta Golf 18 holes, par 72</h3>
          <p>
            Getting here: From Nerja, take the motorway towards Malaga drive
            past Baviera Golf, drive another 10 minutes and here you will find
            Añoreta Golf. The track has the same design as Baviera and is in the
            same style.
          </p>
          <br />
          <h3>Club de Golf los Moriscos 18 holes, par 70</h3>
          <p>
            Get here: This golf course is located in the province of Granada, 39
            km east of Nerja. Nicely located in a sports and leisure area with
            large greens and generous water hazards. The clubhouse is nice and
            has a large restaurant.
          </p>
          <br />
          <h3>Santa Clara Golf Club 18 holes, par 72</h3>
          <p>
            Find here: Located about 1 hour's drive from Nerja, just south of
            Granada, at the foot of the Sierra Nevada. This is a new
            championship course where great consideration has been given to
            nature and vegetation during the construction of the golf course.
          </p>
          <br />
        </div>
        <div className="section">
          <h1>Frigiliana</h1>
          <div className="pictureAndText">
            <div className="picture">
              <div className="image">
                <img src={Frigiliana} alt="Frigiliana" />
              </div>
              <div className="image">
                <img src={Frigiliana2} alt="Frigiliana" />
              </div>
              <div className="image bigDisplayNone">
                <img src={Frigiliana3} alt="Frigiliana" />
              </div>
            </div>
            <div className="text">
              <p>
                Andalucia's most beautiful village is a historic gem up in the
                Almijara mountains. The village, which is something of a suburb
                of Nerja, is a traditional stronghold for cultural figures and
                has won several Spanish awards for its unadulterated Spanish
                charm, and architectural beauty.
              </p>
              <p>
                The residents of Frigiliana take great pride in their village,
                and take care to keep it stunningly clean and beautiful. Walking
                down Frigiliana's narrow cobbled streets and witnessing the
                architecture and people is like being in another place and time!
              </p>
              <p>
                One of the favorites as always, is to wander the streets through
                the award-winning neighborhood of Mudéjar. Lunch or tapas with a
                breathtaking view. Many of the restaurants and bars have roof
                terraces with views of the village and valley below. Recommended
                are La Taberna del Sacristan (Plaza de la Iglesia, 3) and The
                Garden Restaurant (Calle Santo Cristo s / n -
                thegardenfrigiliana.com). Both offer a fantastic view and also
                delicious dishes in the same class. If you fancy something
                simpler like tapas, Restaurante Al Fuente (Calle Real 32) and
                the sweets you can find in the shop La Tienda (Calle de la
                Iglesia 7) are delicious.
              </p>
              <p>
                Get out into nature. Frigiliana is a perfect starting point for
                exploring the surrounding Sierra de Tejada Almijara Natural
                Park. Pozo Batan Alberca - Frigiliana's Natural Pool. Swimming
                is not officially allowed, but locals and visitors alike swim
                here when the heat hits. Be careful if you plan to swim,
                especially with children. Jumping from the surrounding walls is
                not recommended.
              </p>
            </div>
          </div>
          <p>
            Visit the lost village of Acebuchal. This activity should be high on
            all visitors' lists and if you have the opportunity to see the area,
            you should not miss it.
          </p>
          <p>
            Frigiliana is located just above Nerja. Follow the A7 / E15 until
            you reach the exit for Nerja and Frigiliana, exit 292. Go left over
            the roundabout and continue straight across to the next one, where
            you will take the MA-5105 in the mountains (you can't miss it). This
            road winds around and climbs up the mountain which eventually takes
            you to Frigiliana, there is only one road. There is a large
            municipal car park at the entrance to the village which is the best
            place to park. Do not try to drive around the central part of the
            village. Several roads are car-free and those who are not used to
            steep and narrow roads should just take a walk instead. Leave
            driving to the locals. Parking is more difficult on Thursdays and
            also when school starts at 9am and ends at 2pm. There are buses that
            depart from Nerja to Frigiliana. The journey takes about 15 minutes
            and costs about one euro. A taxi journey from Nerja to Frigiliana
            should cost between €10-15 depending on the time of day.
          </p>
        </div>
        <div className="section">
          {" "}
          <br />
          <h1>Torrox</h1> <br />
          <p>
            Torrox is a cozy town found between Torre del Mar and Nerja. Torrox
            can be divided into two parts, Torrox Costa, which is down by the
            sea, and Torrox Pueblo, which is found a few kilometers inland.
            Torrex Pueblo is a fine old Arab village with narrow, steep streets
            with white houses clinging to the slope of the mountain.
          </p>
          <p>
            Torrox's coastal strip is 3 km long. The largest beach in Torrox
            Costa is called Playa Ferrara and here you can walk along the Paseo
            Maritimo promenade, which is lined with shops and restaurants.
          </p>
          <p>
            Behind Torrox there are nice hiking trails that you can walk on if
            you want to get out into nature and get exercise as well as view the
            beautiful surroundings. From the top of the mountain you have an
            incredible view of the landscape. You can also hike along the Torrox
            river if you want to have an exciting experience and see something
            new.
          </p>
        </div>
        <div className="section">
          {" "}
          <br />
          <h1>La Herradura</h1> <br />
          <p>
            La Herradura is well known for the beautiful bay shaped like a
            horseshoe, hence the name, and the special surroundings with high
            mountains and outstanding views. As La Herradura's beach is located
            between two headlands, the beach is almost always sheltered from
            strong winds. The resort is a favorite for many who like water
            sports, especially diving and sailing. There is a nice marina with a
            selection of restaurants and shops.
          </p>
        </div>
        <div className="section">
          {" "}
          <br />
          <h1>Torre del Mar</h1> <br />
          <p>
            Torre del Mar is located on the eastern part of the coast and was
            until the 70s a small fishing village. The city belongs to the
            municipality of Velez-Malaga in the region of Axarquia in Andalusia.
            The city is a genuine Spanish community where it has been possible
            to preserve the genuine Spanish atmosphere even if the increasing
            tourism and outside influences could have affected.
          </p>
          <p>
            Here there are many restaurants, cafes, bars, shops, banks, post
            office, pharmacy, police station, hospital and a small market hall.
            Every Thursday there is a street market. There are many parking lots
            and garages to park in when you want to visit the city.
          </p>
        </div>
        <div className="section">
          {" "}
          <br />
          <h1>Almunecar</h1> <br />
          <p>
            Almunecar is only 16 kilometers east of Nerja, and the coastal road
            between the two towns is nothing short of amazing! Almunecar has a
            history that stretches back more than 3,000 years. Here you will
            find Roman aqueducts, the ancient castle Castillo de San Miguel
            which is believed to date back to the Phoenicians, and many other
            places of historical interest.
          </p>
          <p>
            <strong>The Castle of Almunecar</strong> - Almunecar also belongs to
            the Costa Tropical, i.e. the tropical part of the Costa del Sol, and
            is therefore a very popular holiday destination due to its superb
            weather. The name of the city comes from the Moorish word Narixa,
            which means "rich in water".
          </p>
          <p>
            You will also find the historic cities of Seville, Granada and
            Cordoba within easy driving distance of Nerja. In addition, the
            motorways on the Costa del Sol are well developed so it is easy to
            get there by car, and the new train line between Malaga and Madrid
            was recently inaugurated. The ultra-modern AVE train reaches speeds
            of up to 350 km/h and the journey time to the capital is around 2.5
            hours!
          </p>
        </div>
        <div className="section">
          {" "}
          <br />
          <h1>Markets</h1>
          <br />
          <h3>Nerja Tuesdays 10-14 and Sundays 10-14</h3>
          <p>
            There is a market at Almijara II in Nerja at 10.00-14.00 every
            Tuesday. If you can't find it, it's easiest to simply get into a
            taxi and ask to go to the local market. It costs 7 euros as always.
            The market sells everything from clothes, bags and shoes to fruit
            and vegetables at good prices. By all means, don't forget to haggle.
            It is included. However, not on fruit and vegetables.
          </p>
          <p>
            The Sunday market or Thieves' market is a gadget market where just
            about anything, white or black, cheap or expensive, is sold. The
            gadget market takes place at the same location as the Tuesday market
            (Almijara II). If you like flea markets in Sweden, this is for you.
            The times are also the same at 10.00 - 14.00.
          </p>{" "}
          <br />
          <h3>Frigiliana Thursdays 10-14</h3>
          <p>
            Visit the local market. Always a source for local products and
            specialties. Also keep an eye out for the arts and crafts markets
            that occasionally pop up on Saturdays.
          </p>{" "}
          <br />
          <h3>Almuñecar Fridays 10-14 and Sundays 10-14</h3>
          <p>
            On Fridays there is a market in town and then there is a party. Over
            200 stalls are open between 10.00 and 14.00 in the Paseo Blas
            Infante market place, every Friday, except Good Friday and Fridays
            in connection with the Fiesta la Virgen de la Antigua.
          </p>
          <p>
            On Sundays there is a flea market at the same location between 10.00
            and 14.00. The entrance is at the Puerta de Almuñécar triumphal
            arch, which with its 3 arches refers to the Roman, Moorish and
            Christian periods, and which is located between road N-340 and
            McDonalds. The market is actually called Mercadillo los Viernes
            (Friday Market), but is commonly called Baratillo, because it is so
            cheap to shop there.
          </p>
          <p>
            People are crowded here and it's important to keep your money. It is
            easy to shop a lot. You can also easily get rid of them by not
            having enough control. Unemployment is high, so you have to be
            careful. Avoid handbags.
          </p>
        </div>
      </div>
    </>
  );
}

export default DayTrips;
