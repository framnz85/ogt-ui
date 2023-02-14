import React from 'react';
import { RightCircleOutlined } from '@ant-design/icons';
import { isMobile } from 'react-device-detect';

import MentoringGroup from "../../images/mentoringgroup.png";
import KartonSardines from "../../images/3kartonsardines.png";
import SampleDelivery from "../../images/sampledelivery.png";
import NimfaManiscan from "../../images/nimfamaniscan.png";
import McjhimBumacod from "../../images/mcjhimbumacod.png";
import GregSinugbojan from "../../images/gregsinugbojan.png";
import KleinDelosSantos from "../../images/kleindelossantos.png";
import SampleWebsite from "../../images/samplewebsite.png";
import ThreeWebsite from "../../images/threewebsite.png";
import DavaoGrocery from "../../images/davaogrocery.png";
import MoneyBackGuarantee from "../../images/moneybackguarantee.png";
import ActoionTakerGuarantee from "../../images/actoiontakerguarantee.png";

const WithTindahanContent = ({ handleButtonClick, amount, spotTaken, spotLeft, showInitButton }) => {
    
    const schedContainer = {
        width: isMobile ? "100%" : 250,
        fontSize: 16,
        border: "1px solid #4682B4",
        marginLeft: 3,
        marginBottom: 3
    }

    const schedHeading = {
        backgroundColor: "#4682B4",
        color: "#fff",
        padding: "5px 10px",
        textAlign: "center"
    }

    const schedBody = {padding: 10}

    return (
        <div style={{marginTop: 20, fontSize: isMobile ? 16 : 20}}>            
            <div align="center">
                <span style={{ color: "#F00", fontSize: isMobile ? 20 : 30 }}>"Give Me <b>2 Hours A Day For 5 Days</b> To Teach You How To Turn Your Sari-sari Or Grocery Store Into A Hybrid Online Grocery Business And <span style={{ textDecoration: "underline" }}>Make A Lot Of Money</span>"</span>
                <br /><br />

                <span style={{color:"#009A57", ontSize:"22px", fontStyle:"italic", fontSize: isMobile ? 18 : 24}}>Then I'll Give You An <span style={{textDecoration:"underline"}}>eCommerce Website</span> Wherein <b>I And My Staff Will Be The One Who Will Do The Uploading Of Grocery Items Into Your Website</b> So You Can Start The Business Right Away!</span>
            </div>
            <br /><br />

            Meron ka bang traditional business gaya ng sari-sari store or grocery store na sa panahon ngayon ay nagiging matumal na ang benta?
            <br /><br />
            Nagiging disappointed ka na ba dahil kabi-kabila na ang mga sari-sari store at grocery store na nagsisitayuan diyan sa lugar mo at <b>nahihirapan ka nang makabenta ng marami dahil sa competition</b>?
            <br /><br />
            Nakukulangan ka na ba ng time para sa sarili mo, <u>kahit paghatid ng mga anak mo sa school</u> ay di mo na magagawa, dahil di ka makaalis sa tindahan mo kasi walang magbabantay nito?
            <br /><br />
            <span style={{color: "red"}}>Alam mo bang merong makabagong pamamaraan para mapadami ang sales ng sari-sari store or grocery store mo kahit <u>di mo kailangang bantayan</u> ito ng 8 to 12 hours a day?</span>
            <br /><br />
            Gusto mo bang magkaroon ng <b>maraming sales</b> kahit di mo na kailangan magdagdag ng additional stocks at <u>di mo na kailangan ng additional capital</u> para mapalaki ang tindahan mo?
            <br /><br />
            <b>Then… Give me Two(2) Hour a Day for 5 (Five) Straight Calendar Days to Teach You how to <u>turn your Sari-Sari Store or Grocery Store</u> into a</b>
            <br /><br /><br />

            <h3 style={{color: "green", textAlign: "center"}}>Hybrid Online Grocery Business</h3>
            <br />

            And <b style={{color: "red"}}><u>Make a Lot of Money</u></b> with it
            <br /><br />
            Within 5 days, I'll also give you a <span style={{color: "green"}}>Grocery eCommerce Website</span> wherein me and my staff will be the one who will do the <u>Uploading Of Grocery Items</u> into it so that you can <u>have a website that has already grocery items</u>.
            <br /><br />
            This way… You can start your <b style={{color: "green"}}>Hybrid Online Grocery Business</b> right away!
            <br /><br />
            But wait… Anong ibig sabihin ng <b style={{color: "red"}}>Hybrid</b>?
            <br /><br />
            Yan ang <u><b>malalaman mo kapag pinanood mo itong video</b></u> na to hangang sa huli. So make sure not to leave this video hanggang sa matapos mo ito!
            <br /><br />
            By the way, ako nga pala si <b>Francis Clavano</b> and I am a full-time online entrepreneur. I am also an online coach for more than <u>6 years teaching and mentoring thousands of people</u> all over the Philippines on
            how to <b>CREATE and BUILD a Successful Online Businesses</b>.
            <br /><br />

            <center><img src={MentoringGroup} alt="Mentoring Group" style={{width: "100%"}} /></center>
            <br /><br />

            The picture above are the people in my mentoring and coaching team. Over the years of doing my online grocery business I already earned a gross income of <b style={{color: "green"}}>more than 10 Million pesos</b>.
            <br /><br />
            <span style={{color: "brown"}}>But let me take you first back to the time when I don't have this online grocery yet.</span>
            <br /><br />
            The time when I was still struggling <u>how to make more sales</u> with my grocery business.
            <br /><br />
            Like you I was also dreaming of <span style={{color: "blue"}}>having a profitable business</span>. I have ventured into a lot of businesses. I have 2 internet cafe, eloading business, some fruit businesses, and I also ventured in lending business.
            <br /><br />
            <i>"Pero sadly lahat <b>nalugi</b>!"</i>
            <br /><br />
            One time when I was reading my Facebook timeline, I read a statement from the richest guy on Earth (Bill Gates), he says… <i>"If your business is not on the internet then your business will be out of business"</i>.
            <br /><br />
            <i>At that moment I quietly tell myself... <b>AHA! Kaya pala hindi nagsa-succeed ang mga businesses ko dahil hindi ko ginagamit ang internet sa pagbebenta ng mga products and services ko.</b></i>
            <br /><br />
            That statement of Bill Gates is not just prophetic but it is really happening now!!! <span style={{color: "blue"}}>In fact, pinabilis pa nga ito nung nagka pandemya!!!</span>
            <br /><br />
            That’s why at that moment I immediately started to think what other types of business will I get into where that <b style={{color: "red"}}>business can be made online and long-term</b>.
            <br /><br />
            So, I consider a business which I can sell consumable goods such as <u>fruits, vegetables, diapers, and rice</u>.
            <br /><br />
            To the point, I finally get into... <b style={{color: "green"}}>Selling Grocery Items Online!!!</b>
            <br /><br />
            Since meron naman akong fruit business at may pwesto na rin ako. Dinagdagan ko nalang ng kaunting grocery products yung mga paninda ko. Then, nag-avail ako ng isang ecommerce website at
            inapload ko doon lahat ng mga produktong benebenta sa tindahan ko. I just increase the prices of the items ng about 10% at I also ask a delivery fee of 100 pesos
            <br /><br />
            Last June 2015, I started my Online Grocery Business here in Davao City.
            <br /><br />
            What I like about selling grocery online is…
            <br /><br />
            <b style={{color: "red"}}>✓</b> Groceries are <u>consumed in a routinely way</u> so your <b style={{color: "blue"}}>customers will order it in a regular basis</b>. <i>(Once mo lang sila iimbetahin at paulit-ulit na silang bibili)</i>
            <br /><br />
            <b style={{color: "red"}}>✓</b> Most grocery items are basically food so it is forever be needed by people that's why once you establish online grocery, <u style={{color: "green"}}>you have a business that runs for a longer period of time</u> <i>(Your business stops only when people stop consuming groceries - which is technically impossible!)</i>.
            <br /><br />
            <b style={{color: "red"}}>✓</b> Because it's online, <u style={{color: "blue"}}>you can sell it anywhere you want</u>. You can sell it to other cities, to other provinces, to the whole country or even to the whole world as long as you have a courier service that can deliver on that particular location.
            <br /><br />
            <b style={{color: "red"}}>✓</b> You can also <b style={{color: "green"}}><u>sell it online at a little higher price</u></b>. This is because you are giving service to people by providing them convenience. Instead na sila pa yung bibili sa supermarket, ngayon hindi na! Idedeliver pa ito mismo sa bahay nila.
            <br /><br />
            <b>Pero hindi naging madali ang lahat…</b>
            <br /><br />
            During the first 3 months of my operation, I encounter lots of challenges. One time, merong isang customer na nagmessage sa akin at ito yung tinanong nya…
            <br /><br />

            <center><img src={KartonSardines} alt="Karton Sardines" style={{width: "70%"}} /></center>
            <br /><br />

            Sabi nya kung meron ba daw akong naka-kartong 555 sardines, bibili daw sya 3 karton.
            <br /><br />
            Sobrang panghihinayang yung naramdaman ko non kasi wala akong stock ng ganun karami dahil nga as I’ve said, konting grocery lang ang dinagdag ko sa aking tindahan ng mga prutas. Meron akong 555 sardines pero 10 piraso lamang!
            <br /><br />
            At that time nag-isip ako kung anong irereply ko sa customer ko na yun. At bigla ko nalang naalala yung sinabi sa akin ng isa sa mga pina-follow ko at <u>super successful entrepreneur</u> na si <span style={{color: "blue"}}>Richard Branson</span>, sabi niya…
            <br /><br />
            <i>"If someone offers you an amazing opportunity and you're not sure you can do ti, say yes - then learn how to do it later."</i>
            <br /><br />
            Kaya nireplyan ko kaagad yung customer na yun and I say “Yes meron” (kahit wala pa), nagcheck-out agad siya sa website ko, binayaran niya ora mismo.
            <br /><br />
            Then the <span style={{color: "red"}}>big problem comes</span>… Wala akong makuhang stock!
            <br /><br />
            Tumawag ako sa ahente ko sabi wala, tumawag ako sa isa ko pang supplier, wala din daw! Until an idea came to my mind… Bakit nga ba sa ahente or sa supplier ako naghahanap meron naman sa supermarket na
            malapit!
            <br /><br />
            And since binayaran na ako ng customer, <u>money is no longer a problem!</u> Punta agad ako ng supermarket. Dinala ko yung stock na 10 pirasong sardinas at binili ko yung kulang until nakompleto ko yung 3 karton.
            <br /><br />
            Binayaran ko sa cashier and since taga kabilang barangay lang naman yung customer, dineliver ko agad ito gamit yung <b>tricycle ng papa ko</b>.
            <br /><br />
            <h5 style={{color: "green"}}>Solve ang problema ko!</h5>
            <br />
            Dahil may patong akong 10% sa mga items plus delivery fee. Kumita ako ng malaki! And that was the start and the birth of a <b style={{color: "green"}}>Hybrid Online Grocery Business</b>
            <br /><br />
            That I’m going to teach you in the succeeding minutes. So make sure to <b><u>watch this video up to the end</u></b>.
            <br /><br /><br />

            <h3 style={{textAlign: "center"}}>Why I love doing the Hybrid Online Grocery Business?</h3>
            <br />

            <b style={{color: "red"}}>✓ 1.</b> Hybrid Online Grocery Business is a reactive approach which means <b style={{color: "green"}}>you don't need to have the capital for initial stocks</b>.
            <br /><br />
            Saka mo lang kasi bibilhin ang mga items kapag <u>inorder at binayaran na yan ng customer</u> gaya nang ginawa ko sa 3 kartong sardinas! 10 piraso lang ang stock ko pero binili ko yung kulang para makaabot ako ng 3 karton.
            <br /><br />
            That’s why it is called <b style={{color: "blue"}}>Hybrid</b> kasi part of the items ay kukunin mo sa stock sa tindahan mo and part naman ay sa supplier mo gaya ng mga ahente or ang pinakamadali… sa supermarket!
            <br /><br />
            <b style={{color: "red"}}>✓ 2.</b> You don't need a big room or warehouse to store grocery products so <u style={{color: "blue"}}>you don't need to invest a very large amount of money for estate cost</u>.
            <br /><br />
            Kung meron ka ng existing na sari-sari or grocery store, <b>you don’t need to invest more money</b> to turn it into a hybrid online grocery.
            <br /><br />
            Hindi mo na kasi kailangan ng additional space para sa mga paninda. Kasi, as I mention, bibilhin mo lang ang ibang produkto <b>kapag inorder at binayaran</b> na yan ng mga customers mo.
            <br /><br />
            <b style={{color: "red"}}>✓ 3.</b> <u style={{color: "blue"}}>You may opt not to open long hours.</u> Regularly, you open your sari-sari or grocery store at 6 am and you close it by 9 pm (almost 15 hours) unlike sa online grocery you can only work 2 to 4 hours a day. 
            <br /><br />
            This is because yung <u>website mo na kasi ang magta-trabaho ng pag asikaso ng mga orders</u> ng customers. Magta-trabaho ka lang kung ipi-prepare mo na ang mga items at idi-deliver.
            <br /><br />
            <b style={{color: "red"}}>✓ 4.</b> <u style={{color: "blue"}}>You can do it yourself</u> so you may never hire an employee. You may hire a driver or a kargador but it is only optional. <i>(You can even tap courier services gaya ng Transportify, Mobee, Lalamove, etc. for the delivery)</i>
            <br /><br />
            <b style={{color: "red"}}>✓ 5.</b> <b>YOU’LL LEARN TO LOVE COMPETITION</b> through the business. Online grocery business is now gaining popularity to a lot of people specially during the pandemic. The more people doing the same business is already a sign na <span style={{color: "blue"}}>ang business nato ay Patok at siguradong kikita ka ng malaki!</span>
            <br /><br />
            Kung yung mga sari-sari store nga ay halos <u>tabi-tabi nalang at nag-aagawan pa</u> sa isang location <u><b>pero kumikita naman</b></u>, how much more sa Hybrid Online Grocery Business na marami ang location na pwede mong i-serve.
            <br /><br />
            <b style={{color: "red"}}>✓ 6.</b> Mga Ahente, mga Panel, Growsari, Grocery Store and Supermarket are visible everywhere that's why <b><u>supply for your grocery items is abundant</u>.</b>
            <br /><br />
            <b style={{color: "red"}}>✓ 7.</b> Plus <span style={{color: "blue"}}>Manufacturers and Distributors of grocery products are now eager to adopt an e-commerce concept of selling</span> so they are finding grocery store business owners who do online grocery.
            <br /><br />
            And because of the internet it will not be hard for you to find customers in any business today. You just need to post about what you sell on Facebook, Youtube, Instagram, and including Tiktok. Just post it properly then customers will certainly go and buy groceries in your online grocery store. I myself is already applying it to my own online grocery and it provides me a lot of sales!
            <br /><br />
            <b style={{color: "red"}}>Let me show you one of my actual profit when I use this strategy.</b>
            <br /><br />

            <center><img src={SampleDelivery} alt="Sample Delivery" style={{width: "70%"}} /></center>
            <br /><br />

            Last time, I delivered 4 orders to my customers. I earned a net profit of P 1,641.14 (10% of the sale + delivery fees). And it only took me 2 hours to get the items and deliver these to my customers.
            <br /><br />
            <i>"This is a proof that it is really possible to have a business that <b style={{color: "green"}}>you only need to spend 2 hours a day to earn a net income of 1,600 pesos</b>"</i>
            <br /><br />
            ... This is very different from a pure physical store where you need to be open 8 to 16 hours a day just to earn only 1000 pesos or maybe lesser. Gross pa yun ha hindi pa yan yung neto!
            <br /><br />
            Now if it provides big income for only 4 orders, <b style={{color: "red"}}>imagine how much revenue it can give you if you have 8, 10, 20, or more orders a day</b>. That would be a lot of money, right?
            <br /><br />
            And don't worry because I’m going to teach you <u>how to properly post and advertise</u> your online store in social media to get those number of orders a day! Just continue watching...
            <br /><br /><br />

            <h3 style={{textAlign: "center", color: "blue"}}>How To Earn 100k Pesos Or More A Month With Your Store?</h3>
            <br />

            You just need to have a <b style={{color: "green"}}>Grocery eCommerce Website</b> in order to accept bulk orders from customers kahit sarado pa ang tindahan mo!
            <br /><br />
            You want proof?
            <br /><br />
            Here are some of my past students who uses the Grocery eCommerce website I’m about to share with you and their corresponding sales…
            <br /><br />

            <center><img src={NimfaManiscan} alt="Nimfa Maniscan" width={ isMobile ? "100%" : ""} /></center>
            <br /><br />

            This is from Nimfa Maniscan, sabi niya… <i>“Hi all, share ko lang… I have a successful delivery kahapon, 2nd order sa online grocery ko.”</i>
            <br /><br />

            <center><img src={McjhimBumacod} alt="Mcjhim Bumacod" width={ isMobile ? "100%" : ""} /></center>
            <br /><br />

            Ito naman kay Mcjhim Bumacod… <i>“First order is worth Php 5k at yung second order ay worth Php 5.6k naman.”</i>
            <br /><br />

            <center><img src={GregSinugbojan} alt="Greg Sinugbojan" width={ isMobile ? "100%" : ""} /></center>
            <br /><br />

            <i>“Hi Sir Francis. Sorry disturb ako excited lang kasi. At last the wall of ice in my website has been broken. I got my first real ice breaker sale today. Nawala antok ko pag open ko ce mayron e-store email. Thank you very much sir.”</i> – Greg Sinugbojan
            <br /><br />

            <center><img src={KleinDelosSantos} alt="Klein Delos Santos" width={ isMobile ? "100%" : ""} /></center>
            <br /><br />

            At itong kay Klein Delos Santos, sabi nya… <i>“Iba talaga coach… Kahit maliliit basta palagi. Naka 8 customers ako ngayong araw na to. P26k in total sales.”</i>
            <br /><br />

            Maybe you are asking, how to have that Grocery eCommerce Website? There are 2 ways that I know how you can have it.
            <br /><br />
            Una, pwede kang magpagawa sa mga website developer. Nagsearch ako sa internet and I found out that hiring them would cost you around <b>50,000 pesos to 100,000 pesos</b> on a single website.
            <br /><br />
            Depende na rin yan sa looks at functionality na gusto mong meron nito at <u>hindi pa kasali dyan ang maintenance and monthly hosting fee</u>.
            <br /><br />
            Hosting fee would cost you $89(or P4,900) per month to as much as $139(or P 7,700) per month. That is…4,900 pesos to 7,700 pesos <span style={{color: "red"}}>every single month!!!</span>
            <br /><br />
            However, may paraan naman para hindi ka gumastos ng ganun kalaki. Sa pangalawang paraan kasi pwede kang mag-avail ng mga <b style={{color: "green"}}><u>Readymade eCommerce Website</u></b> na dedicated ginawa para sa grocery business.
            <br /><br />
            Kapag readymade ang website mo hindi mo na need maghire pa ng mga developer kasi gawa na siya. Kailangan mo nalang bayaran yung setup fee which cost around <span style={{color: "brown"}}>$230 or 12,890 pesos</span>. At yung monthly hosting fee naman ay <span style={{color: "brown"}}>$29 or 1,500 pesos</span> per month.
            <br /><br />
            But don’t worry, may mga mas mura pa dyan ang ipapakita ko sayo maya maya lang so make sure to stay watching. Now, more than the website alone. You need also to upload all the grocery items you can found in a big supermarket.
            <br /><br />
            Take note <b style={{color: "red"}}>Lahat ng grocery items!</b>
            <br /><br />
            Imagine that there are over 45,000 grocery items that you need to upload. How can you do that if you are busy with your sari-sari or grocery store? Hindi yan ganun kadali! You need to take a lot of time to do it.
            <br /><br />
            <b>But don’t worry there is a way na hindi ikaw ang gagawa non!</b> Aside from that, upon operating your online grocery business, you need also to <u>constantly monitor and update</u> the prices of all grocery items.
            <br /><br />
            Sa sobrang bilis magbago ng mga presyuhan ngayon sa market, mahihirapan ka sa pag catch-up nito. Tulad nung nangyari sa kaibigan kong di Mark, gumagawa rin siya ng online grocery sa kanyang tindahan. Maganda naman yung takbo ng negosyo niya pero minsan lang siya nag-a-update ng prices sa kanyang mga items.
            <br /><br />
            One day, merong nag-order sa kanya thru his website ng 5 cases ng Coca-cola cans. Ang presyo nito sa kanyang website ay 903 pesos each case. Nagbayad na sa kanya yung customer nya at ready na niyang kunin sa supermarket. Nung dumating na siya sa supermarket, dahil 3 months na siyang hindi nag-update sa mga presyo, ang halaga na pala ng per case sa Coca-cola cans ay 1,107 pesos na.
            <br /><br />
            Indeed, lugi si Mark ng 204 pesos per case. Eh 5 cases yun, idi lugi siya ng 1,020 pesos. At yan din yung mangyayari sayo kapag hindi mo regularly ina-update yung mga presyo…
            <br /><br />
            <b style={{color: "red"}}>You may loose a lot of your profit!</b>
            <br /><br />
            But not for you this time because I have developed a program called <b style={{color: "green"}}>Online Grocery Prosperity and Abundance Program </b>or <b style={{color: "green"}}><u>OGPA Program</u></b>
            <br /><br />
            In this program, <b><u>you will be given a Grocery eCommerce Website</u></b> <span style={{color: "green"}}>plus a 5-Days Online Workshop</span> wherein me and my staff will be the one <u style={{color: "red"}}>who will do the uploading, price monitoring and updating of grocery items</u> into your website.
            <br /><br />
            This way, <u>hindi mo na aalahanin pa ang website mo</u>, konting setup mo nalang, at doon ka nalang then magfo focus sa operation ng business mo.
            <br /><br />
            Not only that, I will also going to <u>teach you the needed knowledge and skills</u> how to <b style={{color: "green"}}>bring more customers and sales</b> using social media into your business.
            <br /><br />

            <center><img src={SampleWebsite} alt="Sample Website" style={{width: "70%", border: "3px solid #fff"}} /></center>
            <br />

            Ito yung example ng ready-made Grocery eCommerce Website
            <br /><br />

            <center><img src={ThreeWebsite} alt="Three Website" style={{width: "90%", border: "3px solid #fff"}} /></center>
            <br />

            Ito yung website na ginagamit ko, ginagamit nila Klein, Mcjhim, Nimfa, At ni Greg at ng iba ko pang student. The good news is… Ito rin yung website na gagamitin mo para maging Hybrid Online Grocery Business ang tindahan mo
            <br /><br />

            <center><img src={DavaoGrocery} alt="Davao Grocery" style={{width: "70%", border: "3px solid #fff"}} /></center>
            <br />

            Ang pangalan ng website ko ay Davao Groceries, sayo iba. Depende na sa ipapangalan mo!
            <br /><br />
            At ang maganda, <u style={{color: "brown"}}>hindi ka magbabayad ng 12,890 pesos at $29 monthly</u> para sa website na to. Dahil gusto kong makatulong na magkaroon ka ng maraming sales kahit di mo kailangan maglaan ng malaking oras dito,
            <br /><br />
            All you need to pay for the OGPA Program is a <b>one-time setup fee of <span style={{color: "green"}}>9,890 pesos</span> and a monthly hosting fee of only <span style={{color: "green"}}>$19 (around 1,000 pesos plus) per month</span></b>.
            <br /><br />
            Yes! For only 9,890 pesos one-time setup fee and a monthly hosting fee of $19, you will get…
            <br /><br />
            <b style={{color: "red"}}>✓</b> The complete Grocery eCommerce Website
            <br />
            <b style={{color: "red"}}>✓</b> Online Grocery Prosperity And Abundance (OGPA) Workshop, we will talk more of this 	later…
            <br />
            <b style={{color: "red"}}>✓</b> Uploading of the Fast Moving grocery items 	into your website
            <br />
            <b style={{color: "red"}}>✓</b> Price Monitoring and Updating of the grocery items we uploaded in your website
            <br />
            <b style={{color: "red"}}>✓</b> Weekly Zoom Meeting (every Saturday 8 PM)
            <br /><br /><br />

            <h3 style={{textAlign: "center", color: "red"}}>Ano naman ang OGPA Workshop?</h3>
            <br />

            OGPA Workshop is exclusively included in the OGPA Program. This is where we <b style={{color: "violet"}}>intensively discussed the step by step</b> process on how to properly established your <span style={{color: "green"}}>Hybrid Online Grocery Business</span>
            <br /><br />
            I am selling this workshop for another 12,890 pesos but if you avail the OGPA Program, I will <span style={{color: "red"}}>include this free of charge</span>.
            <br /><br />
            Ok. This is what we will going to do. The program will actually happens in <b>Two Weeks</b>. On the first week, we will be building your Grocery eCommerce Website before we go diving on your 5 Days Workshop (OGPA Workshop).
            <br /><br />
            <b>All you need to do on the first week is to send me a request advising me to setup your website and start uploading grocery items into it.</b> This will ensure that even before your first day of the workshop, you have an operational and an active <u style={{color: "red"}}>Online Grocery Ecommerce Website</u>. In fact, once you have the website you can <u style={{color: "red"}}>immediately start accepting orders</u> even before the first day of your workshop!
            <br /><br />
            On Monday of the second week, we shall then start the proper intensive training of OGPA Workshop.
            <br /><br />
                        Here's the detailed information on what you'll be getting on the program…
            <br /><br />

            <div className={isMobile ? "" : "d-flex justify-content-center"}>
                <div style={{...schedContainer, width: isMobile ? "100%" : "20%"}}>
                    <div style={schedHeading}>
                        Monday 6AM<br/> (1st Week)
                    </div>
                    <div style={schedBody}>
                        Sign up request form for us to start building your website. 
                    </div>
                </div>
                <div style={{...schedContainer, width: isMobile ? "100%" : "60%"}}>
                    <div style={schedHeading}>
                        Tuesday - Friday<br/> (1st Week)
                    </div>
                    <div style={schedBody}>
                        Sit back and relax while you wait for your website to be setup. 
                    </div>
                </div>
                <div style={{...schedContainer, width: isMobile ? "100%" : "20%"}}>
                    <div style={schedHeading}>
                        Saturday or Sunday<br/> (1st Week)
                    </div>
                    <div style={schedBody}>
                        You should have a website on these days.
                    </div>
                </div>
            </div>

            <div className={isMobile ? "" : "d-flex justify-content-center"}>
                <div style={schedContainer}>
                    <div style={schedHeading}>
                        SESSION 1 Monday 6AM<br/> (2nd Week)
                    </div>
                    <div style={schedBody}>
                        Familiarizing your Website’s User Interface and how you can turn it into a Customer Attraction Focus website so you can have a lot of customers and transforming them from first time buyer into a repetitive buyer.
                    </div>
                </div>
                <div style={schedContainer}>
                    <div style={schedHeading}>
                        SESSION 2 Tuesday 6AM<br/> (2nd Week)
                    </div>
                    <div style={schedBody}>
                        You’ll discover how to maximize profitability by placing the right prices of your grocery products. You will also learn how to make people buy more from you instead of that in your competitor or in the supermarket.
                    </div>
                </div>
                <div style={schedContainer}>
                    <div style={schedHeading}>
                        SESSION 3 Wednesday 6AM<br/> (2nd Week)
                    </div>
                    <div style={schedBody}>
                        You’ll learn where and how to get regular customers from different people on social media.
                    </div>
                </div>
                <div style={schedContainer}>
                    <div style={schedHeading}>
                        SESSION 4 Thursday 6AM<br/> (2nd Week)
                    </div>
                    <div style={schedBody}>
                        The website you’ll be getting was not merely design for grocery only. On this session, I’ll show you where and how to get other products that you can sell on your website on top of grocery products. This way… You’ll earn much more!
                    </div>
                </div>
                <div style={schedContainer}>
                    <div style={schedHeading}>
                        SESSION 5 Friday 6AM<br/> (2nd Week)
                    </div>
                    <div style={schedBody}>
                        You’ll learn the fastest way to earn your first million thru the right and latest techniques to acquire lots of customers.
                    </div>
                </div>
            </div>
            <br />

            Although these lessons will be sent to you via email at 6AM per day but since these are all recorded videos, you can watch the lessons anytime of the day when you are already vacant.
            <br /><br />
            
            <div style={{...schedContainer, width: "100%"}}>
                <div style={schedHeading}>
                    Every Sunday at 8PM (Live Q and A Session)
                </div>
                <div style={schedBody}>
                    Every Sunday at 8PM we will do a 15 Minute Presentation, 1 Hour Website Checking, and 1 Hour Q And A Session. Videos are also recorded for those who can't attend. 
                </div>
            </div>
            <br />

            <b style={{color: "red"}}>TAKE NOTE!</b> That the Live Q and A Session thru Zoom will be <u>every Saturday at 8 PM</u>.
            <br /><br />
            So nothing to lose on this program now. I’m going to make sure that you will be <u style={{color: "red"}}>successful in turning</u> your <b style={{color: "green"}}>sari-sari or grocery store into a hybrid online grocery business</b>.
            <br /><br />
            Because I’m going to meet you and check the development of your business <b><u>every Saturday at 8PM</u></b>. I’m going to push you to do it until you have <span style={{color: "blue"}}>successfully operating</span> your Hybrid Online Grocery Business. And be making more money than you, having a sari-sari or grocery store only, without a website.
            <br /><br />

            {showInitButton && <>
                <div align="center">
                    <span style={{color: "red"}}>Click the BUTTON below to Enroll NOW!!!</span>
                    <br /><br />

                    <button
                        type="button"
                        className="btn-primary btn-lg"
                        style={{ fontSize: isMobile ? 18 : 30, padding: isMobile ? "15px 40px" : "15px 80px", marginBottom: 20 }}
                        onClick={() => handleButtonClick()}
                    >
                        Click Here To ENROLL Now <RightCircleOutlined />
                    </button>
                </div><br />
            </>}
            <br />
                        
            <b>Q:</b> What if I am busy? How can I attend the workshop?
            <br /><br />
            <b>Answer:</b> All the instructions are being sent to you with a recorded videos and these lessons will be sent every 6 AM each day so you'll have enough time to watch it. Also, if you cannot attend the Live Q and A session, I will also send you a recorded copy of it.
            <br /><br />
            <b>Q:</b> How can I request to setup my Grocery Website?
            <br /><br />
            <b>Answer:</b> On Monday of the first week, an email will be sent to you containing the link where you can register for the Grocery Website. After registration, you need to reply to that email telling us that you finish the registration and telling us to start setting it up.
            <br /><br />
            Monday to Friday of the second week, that is where we start the workshop. Saturday of the second week is our first Live Q and A Session.
            <br /><br />
            Here’s the good thing, your learning won’t stop because every Saturday after your workshop, we will continually meet thru Zoom checking and making sure that you are <u>on the right track</u> on <b>turning your sari-sari or grocery store</b> into a <b style={{color: "green"}}>hybrid online grocery business</b>.
            <br /><br /><br />

            <h3 style={{textAlign: "center", color: "red"}}>But I need you to understand this!</h3>
            <br />

            Ako at sampu ng aking mga staff ay mga tao lang din at may limitation. Hindi namin kakayanin ang pagsetup ng website sa mga mag-a-avail ng <b style={{color: "green"}}>OGPA Program</b> kung sosobra na ito sa 20 ka website or 20 ka tao.
            <br /><br />
            Which means we are only limiting <u>20 people who can avail</u> the OGPA Program for this coming schedule. <b>But the good news</b> is if nabasa or napanood mo itong video na to ngayon that means <u>you have been given a spot</u> to avail OGPA Program
            <br /><br />
            Sa dami kasi ng mga gustong makakuha ng program na to para maging hybrid ang mga tindahan nila, <u>we only cater first come first serve basis</u>. <span style={{color: "blue"}}>So make sure na kunin mo na yung spot na binigay namin sayo ngayon or else we will be giving this to other person who is waiting next in line.</span>
            <br /><br />
            And <b><u>we don’t know yet if kailan uli kami magkakaron ng another schedule</u></b> kasi nga hindi namin alam kung kailan namin matatapos isetup ang 20 ka website. <span style={{color: "blue"}}>So you need to hurry to avail OGPA Workshop. Right now, there are already {spotTaken} people that jump in to this program. So, {spotLeft} spots nalang yung natitita. Once all the spot have been taken or until midnight of Sunday, whichever comes first, we will end the enrollment for the program.</span>.
            <br /><br />
            One more thing, to make this deal even sweeter for you I'm also giving you a…
            <br /><br />

            <center><img src={MoneyBackGuarantee} alt="Money Back Guarantee" style={{width: "70%"}} /></center>
            <br />

            How would you know if the program is right for you? You try it and see for yourself right? And this is what I'm offering you right now.
            <br /><br />
            <b>This is how it works…</b>
            <br /><br />
            Enroll in this workshop and then request for the website on the first day (make sure you request it on the first day). <u>Once you receive the website and if you're not happy with it, for whatever reason</u> (kahit di mo lang trip yung looks ng website mo), just email me before the second day upon receiving it and <b style={{color: "red"}}><u>I will give you a FULL refund</u></b>.
            <br /><br />
            <b style={{color: "red"}}>No questions asked. No hard feelings. Friends pa din tayo.</b>
            <br /><br />
            I'm sure you'll agree that not many programs can give you a <b>money back guarantee</b>. Why? Because many people can claim they can teach you how to create an online store business but <u>only few can back it up with actual income results</u>.
            <br /><br />
            Modesty aside, I sold over <u>1 Million Pesos of grocery products in the last 12 months</u> operating my own online grocery business. And I have lots of students that can attest to how my <b style={{color: "red"}}>mentoring program</b> abled them to do exactly the same way too.
            <br /><br />
            That's why I have the "guts" to offer you a <span style={{color: "red"}}>100% money back guarantee</span>. If you decided to back out on the 2nd day after you receive your website, <u style={{color: "green"}}>send me your bank account information and I'll deposit the full refund to your bank account</u>.
            <br /><br />
            Or if you enrolled with your credit card I will credit it back to you in 3-5 business days (refund processing cost for card payments may apply). You won't find any better deal than this.
            <br /><br />
            But wait, I am not finish yet! Here's the <u>craziest deal that you won't find anywhere else</u> because I'm also giving you an...
            <br /><br />

            <center><img src={ActoionTakerGuarantee} alt="Actoion Taker Guarantee" style={{width: "70%"}} /></center>
            <br />

            Now this is how it works.
            <br /><br />
            Enroll in this workshop and then go through all the sessions
            <br /><br />
            If you have gone through all these (completed the 5 days workshop, attended the Live Q and A Session) and follow all the instructions I have provided in the workshop but after 45 days from your first lesson you wont get any single sale, I will refund you 100% of  what you pay within 3 days!
            <br /><br />
            Yes!  That's how confident I am that if you really follow all the instructions I'll give you on the training, I can <u>guarantee that you will earn a lot of money</u>.
            <br /><br />
            <b>Note:</b> You need to exactly follow all my instructions in the 5 sessions, attended the Live Q and A and if you can provide me proof that you did all the instructions there but did not have a single sale after 45 days, then I'll refund you all of what you pay now in the next 3 days.
            <br /><br />
            Isn't that an extra ordinary deal? You won't find any deal like that to other offer!
            <br /><br />
            <b>Question...</b> Meron na bang successfully nakapag-parefund after 45 days?
            <br /><br />
            <b>Sagot... WALA.</b>   Dahil lahat ng nag-undergo ng workshop na to na ginawa ang lahat ng mga pinapapagawa ko ay nagkaroon talaga ng maraming sales!
            <br /><br />
            And now they are successfully operating their online grocery business and continually earning multiple figure income a month because they exactly follow all the things they have learned on the workshop.
            <br /><br />
            Alright, I guess you have all the things you wanted to hear from this program. Nothing more to lose to enroll now!
            <br /><br />
            All you need to do is grab your spot by clicking the button below to register as there are only limited people we can accept on this workshop.
            <br /><br />

            {showInitButton && <>
                <div align="center">
                    <span style={{color: "red"}}>Click the BUTTON below to Enroll NOW!!!</span>
                    <br /><br />

                    <button
                        type="button"
                        className="btn-primary btn-lg"
                        style={{ fontSize: isMobile ? 18 : 30, padding: isMobile ? "15px 40px" : "15px 80px", marginBottom: 20 }}
                        onClick={() => handleButtonClick()}
                    >
                        Click Here To ENROLL Now <RightCircleOutlined />
                    </button>
                </div><br />
            </>}
            <b>Oh by the way...</b>
            <br /><br />
            <span>If you enroll in the workshop today or until 20 spots have been taken, you can avail a very big discount!!!</span>
            <br /><br />
            So, from P9,890 enrollment fee, you can now pay for…
            <br /><br />
            <b>Only ₱{amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}!</b>
            <br /><br />
            <b>A very huge that is almost 60% discount!</b>
            <br /><br />
            And… Ito pa, aside from the 60% discount, we will also <u>waive your first 3 months</u> of the monthly hosting fee for the website!
            <br /><br />
            YES!... To enroll in OGPA Workshop now, you only need to pay {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} pesos as a registration fee (this includes the one time setup fee for your website). 
            <br /><br />
            Plus, you will only start paying your monthly hosting fee for the website on the fourth month!
            <br /><br />
            So hurry! You have to act now because if more and more people will going to get inside this program, we will be bringing it back to its original price!

        </div>
    );
}
 
export default WithTindahanContent;