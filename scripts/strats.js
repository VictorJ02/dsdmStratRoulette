let generalStratArray = [
    {heading: "Monnjfull", strat: "Alle må fyll munnen med drikke, og kan ikke svelge/spytte ut før du er død eller runden er ferdig."},
    {heading: "Alle dræp Magnus", strat: "Alle må forsøk å dræp Magnus den hær runden."},
    {heading: "Bytt hender", strat: "Bytt hånd på tastatur og mus."},
    {heading: "Nægev eller shniper", strat: "Alle droppe våpenan sine. Den som e nederst på leaderboardet kjøpe en Negev, den som e nerst nederst kjøpe en Scout. Når dem dør kan man plokk opp demmers våpen."},
    {heading: "Dårlig kommunikasjon", strat: "Kan bare bann eller si A eller B."},
    {heading: "Pistol først", strat: "Må få en kill med pistolen før du kan bruk hovedvåpenet."},
    {heading: "Pæng e lættis", strat: "Spilleren med mest pæng må kjøp ting t alle. Resten kan ikke kjøp nokka i det hele tatt."},
    {heading: "Riflemen", strat: "Laget må ha en av hver rifle, ingen kan ha den samme."},
    {heading: "BIG FLEX", strat: "Når du drep nonn må du type navnet på den du drept sammen med 'get owned' i chatten. Det må du gjør med én gang."},
    {heading: "DUBSTEP", strat: "En på laget har voiechat konstant på mens han blæste dubastep på en høytaler gjennom hele runden."},
    {heading: "Fattiggris", strat: "Man kan kun bruk våpen man ikke har skin på."},
    {heading: "Granada", strat: "Skippe alt som e på boten og queue Granada Remix av Cigarillos"},
    {heading: "Basshunter", strat: "Skippe alt som e på boten og queue valgfri Basshunter sang. I tilegg må man snakk svænsk resten av runden"},
    {heading: "Vassendgutane", strat: "Skippe alt som e på boten og queue valgfri Vassendgutanesang. I tilegg kan man bare quote Vassendgutane-lyrics resten av runden"},
    {heading: "Soleplassland", strat: "Alle må syng Soleplassland av Tre Små Kinesere. Ingen annen komunikasjon e lov"},
    {heading: "Fanni Moments!", strat: "Det e bare lov å si Fanni Moments!, Shadowplay!, lagre!, lagre Victor!, kan nånn lagre? etc."},
    {heading: "Jump!", strat: "Hopp hele tida gjennom hele runden. Når man e i en skytekamp må man syng på sangen Jump av Van Halen helt te man dræp eller blir dræpt. Hvis man ikke syng kan man bare kjøp pistol og Zeus næste runde"},
    {heading: "KnivGPS", strat: "Når man kjæm te et kryss må man ta fram kniven og venstreklikk. Hvis den sving te venstre går man te venstre og motsatt."},
    {heading: "Selektiv skyting", strat: "På starten av runden må hver spiller vælg to motstandera. Hvis du dræp en av dæm må du stop å gå og skyt for ræsten av runden."},
    {heading: "Bruk utilities!", strat: "Du må træff mostanderen med både pistolen din og primary våpenet før du kan dræp dæm. Den hær kan ikke gjænnomdøres i pistolrunden."},
    {heading: "Bare One-Taps", strat: "Du kan bare skyt et skudd om gangen. Hvis du bomme må du lægg fra dæ våpenet eller reloade. Du kan plukk det opp igjen, men det e fortsatt dæm samme reglan"},
    {heading: "SMS", strat: "Ingen mics! Man må skriv i chatten hvis man spotte en enemy, plante bomben etc."},
    {heading: "Robin Hood", strat: "Den rikeste spillern på laget må kjøp våpen te alle andre (så mange som han kan). Han må også gi fra sæ våpene sitt han brukt i den forrige runden. Dæm eneste våpenan han kan bruk e fra det andre laget."},
    {heading: "Løge-Hagen Rap-Contest", strat: "All kommunikasjon foregår gjennom rap. Når du daue må du rappe om kordan død"},
    {heading: "En av alt", strat: "Laget kan bare bruk 1 shotgun, 1 pistol, 1 sniper rifle, 1 assault rifle, 1 knife and 1 grenade. Spillern med flæst assists vælge kæm som får ka. Selv kan han bare bruk kniv og granat."},
    {heading: "2000... Skit!", strat: "Alle kjøp det våpenet dæm hate mæst og gir det te en teammate."},
    {heading: "Tornado", strat: "Hvis det bare e en spiller igjen på laget må ræsten blæs konstant i mikrofonan sine"},
    {heading: "Gullvåpenet", strat: "Den første som får et kill må del våpenet sitt med ræsten av gruppa. Ræsten hiv fra seg våpenan sine"},
    {heading: "Tall og slikt", strat: "Tallet ditt e den plassen du e på scoreboardet. Du får bare lov å kjøp våpen fra kategorien med samme tall"},
    {heading: "Samlern", strat: "Når du dræp en fiende må du plukk opp våpenet te fienden og ta det med tebake te spawn. Lag en samla haug. Bonuspoeng for teammatea sine våpen"},
    {heading: "Skytterbanen", strat: "Alle kjøpe shotgun og rope PULL! når man skyt på en fiende"},
    {heading: "Borte bra, hjemme best", strat: "Ingen forlate spawn!"},
    {heading: "Kongen befaler", strat: "En e kongen og ræste gjør som han si. Om nånn feile, altså gjør nokka når personen ikke si kongen befaler, så må dæm bli dræpt"},
    {heading: "Gladiator", strat: "Bare en kan dra fra spawn om gangen. Når den personen dør går næstemann"},
    {heading: "Headsette gæli veien!", strat: "Snu headsette 180 grader, altså bakfram."},
    {heading: "Sovjetiske Taktikka", strat: "Bare en person kjøp et våpen. Ræsten følge ætter og plukke opp våpenet til lederen når han daue."},
    {heading: "Zuhn's Zeus", strat: "Bare Zeus og kniv"},
    {heading: "Ørna", strat: "Alle kjøpe deagle. Bare one deag"},
    {heading: "BAK DÆ!", strat: "Man kan bare bruk S for å gå"},
    {heading: "Titten på hjørnet", strat: "Hele laget peeke en fiende en etter en med bare pistol"},
    {heading: "Ørna EXPERT MODE", strat: "Alle kjøpe deagle. Bare one deag. Hvis man treff kroppen må man gå for knife"},
    {heading: "Våpenbytte", strat: "Hver gang man dræp en fiende må man bytte te våpenet fienden brukt. Det e også det man må dræp næste fiende med"},
    {heading: "Bare crouching", strat: "Bare crouch. +duck i console og -duck når man e feredig. Hvis man ser nånn som reise sæ ska man skyt dæm"},
    {heading: "Father Grigori", strat: "Bare shotgun!"},
    {heading: "Framover! Marsj!", strat: "Bare love å gå framover. Det e W som e greia!"},
    {heading: "Back to Ungdomskolen", strat: "Bare jumpshots og noscopes (Hvis man har råd te SSg eller AWP). MLG, 420, Illuminati, Doritos, Mountain Dew, COD, pikk"},
    {heading: "Napoleon med sin hær", strat: "Alle kjøpe scout. Alle e en firing squad. Vi stille oss på række på mid."},
    {heading: "Grand Prix", strat: "Velg hvilken som helst strat og utenfør den to gang samme runde. Gjør den to runda hvis du må"},
    {heading: "Veritas Aequitas", strat: "4 stykker dele sæ opp i to gruppa og kjøp duelies og kevlar. Dæm tar hvert sitt site. Sistemann kjøpe duelies og sawed off/Nova og må og kan bare spill hvis han har mulighten te å clutche"},
    {heading: "COPS! Bad boys, bad boys...", strat: "Bruk samarbeid og taktiske granata gor å unngå at fienden pushe mens man prøve å gjør fienden innhabil med Zeus. Hvis en teammate avfyr et våpen må dæm bokstaveligtalt kickes eller blir kalt George Floyd for ræsten av gamet."},
    {heading: "Neymar Jr.", strat: "Laget spille en vanlig runde, men hvis man tar skade må man filme (Fotball Filming...). Man må så bli på samme posisjon ræsten av runden og fosvar sæ. Hvis man blir dræpt må man ta saken te nærmeste dommer og be han om å gi motstander rødt kort (Beskyld motstander for hacking i chat)"},
    {heading: "Tyskland - Brasil (7-1)", strat: "Hvis laget ditt vinn pistol runden må du la det andre laget vinn dæm næste 7 rundan. Huehuehue i chatten e ikke nødvendig, men gjør opplevelsen bedre. (Huehuehue e haha i Brasil)"},
    {heading: "Ett Mag", strat: "Alle tømme våpnan sine te dæm har bare ett mag igjen på starten av runden"},
    {heading: "Anomaly", strat: "Før runden starte må alle bruk en CS:GO case simulator. Det våpenet man unboxe e det man må bruk. Hvis man ikke kan bruke det prøve man igjen"},
    {heading: "Hodeskuddprosent: 0%", strat: "Bare bodyshots. Hvis man træff nånn i hodet kan mann ikke kjøp næste runde"},
    {heading: "Victor", strat: "Bare Negev e lov. Hvis man ikke har råd, kan man ikke gjør en skit!"},
    {heading: "Noah-kommunikasjon", strat: "Bare lov å bruk ord som Bruh, Yeet, JaaaranD, høye stønn fordi man e oppgitt etc."},
    {heading: "Jarand-komuunikasjon", strat: "Det e bare to samataleemna som e interresant den hær runden. Kanye og Jerma"},
    {heading: "Jarand", strat: "Bare lov å bruk Dual Berettas. Hvis man ikke kan kjøp det, væl... bad luck! Fuck you! Fuck you! Fuck you!"},
    {heading: "Jarand i niendeklasse", strat: "Bare lov med våpen med scopes"},
    {heading: "Just Dance i pausen pliiiiiis!", strat: "Alle må bli i spawn den hær runden. Top fragger'n vælg om man ska dans ingame eller reis sæ opp av stolen og dans irl"},
    {heading: "Reverse Cowgirl, sex... hehe...", strat: "4 spiller dele sæ i to gruppa. Den ene spillern må vær på toppen av den andre. I tilegg må han se den andre veien. Sistemann runke i spawn"},
    {heading: "Covid-19", strat: "Det kan ikke vær flere enn en person i vært rom"},
    {heading: "Jens Petter Jacobsen", strat: "Snakk som Jens P. Jacobsen. End alle setninga med ord som Kurrant, Shhiiiit Man!, The we take berlin, Ka kalt du båten? etc."},
    {heading: "Granatfæst", strat: "Vær runde må man kjøp molotov/incendiary og HE før man kjøp nokka annet. Hvis du daue før du har brukt dæm bægge kan du bare bruk shotgun og starterpistolen"},
    {heading: "Alt har en pris", strat: "Man kan bare kjøp armor hvis man vinn runden"},
    {heading: "CSGO Shotgun Pro", strat: "Alle kjøp shotgun. Den eneste bevegelsen som e lov e bhopping. Hvis man ikke kan å bhoppe så må man kast shotgunen sin ditt man vil og så gå te shotgunen."},
    {heading: "Lydleggern", strat: "Alle laga sound effects the alt dæm gjør"},
    {heading: "Russisk Roulette", strat: "Alle må trykk på autobuy på starten av runden (F1) og bruk det man får."},
    {heading: "Sigurd-Chan", strat: "Alle snakke på sigurd-japansk hele runden. Takka juuu, e do særrioooos?"},
];

let generalCTStratArray = [
    {heading: "30 Sec", strat: "Alle må bli på spawn te timer si 30."},
    {heading: "Da Hood", strat: "Før runden starte må alle skriv 'finna shoot you up' og så kjøp UMP-45. Alle ska kjør 'drive-bys' uten og stop."},
    {heading: "Two man army", strat: "Kun to kan vær ut av spawn om gangen. Flere kan går ut når dem dør."},
    {heading: "Jarand's way", strat: "Dem 3 øverste på leaderboardet prøve sitt beste å vinn runden, mens dem 2 nederste prøve å hindre dem så my som mulig uten å skad dem."},
    {heading: "Rap god", strat: "Alle callouts må rappes."},
    {heading: "Big smoke", strat: "Alle stacke A og gjømme sæ i en smoke fram til bomben e planta"},
];

let generalTStratArray = [
    {heading: "På boligjakt", strat: "Gå innom bægge sites før man plante"},
    {heading: "Headass", strat: "Får du et headshot kan du ikke gjør nokka resten av runden."},
    {heading: "Die hard", strat: "Kun crouching og Duel Berrettas."},
    {heading: "Bangarang", strat: "Rush B, så CT spawn, og så plante en plass."},
    {heading: "Tog", strat: "Alle rushe til det tetteste chocepointet på banen, og så går vi inn en etter en."},
    {heading: "Fryst bombe", strat: "Den som har bomben kan ikke beveg sæ."},
    {heading: "Maccern", strat: "Alle kjøpe MAC-10 og rushe en av bombeområdan."},
    {heading: "Lurt å plante", strat: "Hvis bomben ikke blir planta den her runden, må alle ha +right i konsollen neste runde. Det her blir i tillegg til neste strat."}
];

let mapCTStratArray = {
    dust2: [],
    inferno: [],
    nuke: [],
    train: [],
    mirage: [],
    vertigo: [],
    overpass: [],
    agency: [
        {heading: "Tony Hawk", strat: "Hver gang du ser en rail (gellender) må du gå opp på den og rop masse skate-triks. Når du går av må du ta en 360."}
    ],
    office: [
        {heading: "Rainbow 6 siege", strat: "Alle må gå inn stigen til vinduet til kontoret og snik sæ bort mot motsatnderan."},
        {heading: "Guerilla", strat: "Alle går til det store vinduet bak garasjen croucha, og reise sæ samtidig."}
    ],
    cache: [],
    anubis: []
};

let mapTStratArray = {
    dust2: [
        {heading: "Sniper elite 5", strat: "Alle kjøpe sniper og scope ned mid. Sikt på ballan."}
    ],
    inferno: [],
    nuke: [
        {heading: "Rushe vent", strat: "Alle må rushe venten. Lez gooooo!"}
    ],
    train: [],
    mirage: [],
    vertigo: [],
    overpass: [],
    agency: [
        {heading: "Tony Hawk", strat: "Hver gang du ser en rail (gellender) må du gå opp på den og rop masse skate-triks. Når du går av må du ta en 360."}
    ],
    office: [
        {heading: "Se, æ e en busk!", strat: "Alle må sitt i en busk / plante."}
    ],
    cache: [],
    anubis: []
};
