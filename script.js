/* BandBridge IELTS — Reading engine
   Original practice material; not an official IELTS paper. */
const passages = [
{
 title:"The hidden life of urban trees", range:"Questions 1–13", suggested:"Suggested: 20 minutes",
 paragraphs:[
 ["A",`For much of the twentieth century, urban trees were commonly treated as decorative additions to streets and parks. Their value was often measured by appearance: a neat avenue, a patch of shade or a pleasant view from an office window. In recent decades, however, researchers have begun to describe trees as part of a city's essential infrastructure. A mature tree can intercept rainfall, cool the air, provide habitat and influence how people use public space. These services are especially important as cities become denser and experience more frequent periods of extreme heat. Yet the benefits are not distributed evenly. Wealthier neighbourhoods often have more continuous tree cover, while districts with heavy traffic or limited green space may face the greatest environmental pressures.`],
 ["B",`One of the best-known benefits is the reduction of urban heat. Roads, roofs and walls absorb solar energy during the day and release it slowly after sunset. This creates an urban heat island, in which built-up areas remain warmer than nearby rural land. Trees can moderate this effect in two ways. Their canopies block some sunlight from reaching hard surfaces, and their leaves release water vapour through a process called transpiration. The second process uses energy and can lower local temperatures. The effect depends on species, soil moisture, canopy size and the arrangement of buildings. A line of small trees in narrow pavement pits, for example, may provide much less cooling than a connected canopy over a wide pedestrian route.`],
 ["C",`Trees also affect the movement of rainwater. In a natural landscape, vegetation and porous soil slow rainfall and allow some of it to soak into the ground. In a heavily paved neighbourhood, water can run rapidly into drains, sometimes overwhelming systems during intense storms. Leaves and branches intercept a proportion of rainfall, while roots can improve soil structure and create channels through which water moves. These effects do not mean that trees can replace drainage infrastructure. Their contribution is greatest when they are combined with permeable paving, rain gardens and carefully designed storage areas. City engineers increasingly use the term green infrastructure for such connected systems, rather than treating each planted area as an isolated feature.`],
 ["D",`Choosing suitable species is more complicated than selecting the fastest-growing tree. A species that thrives in a cool, wet climate may struggle during a prolonged dry spell, while a tree with a broad crown may be unsuitable beneath overhead cables. Roots can damage poorly designed pavements, although this problem is often caused by restricted planting spaces rather than by roots alone. Some municipalities have responded by creating approved lists of hardy species. Urban ecologists caution that relying on a short list can create a different risk: a disease or pest may spread quickly through a population with little genetic variety. A diverse urban forest is generally more resilient, provided that its species are suited to local conditions.`],
 ["E",`The survival of a newly planted tree is not guaranteed by the ceremony that accompanies its arrival. During its first years, it may need regular watering, protection from vehicle damage and enough uncompacted soil for its roots to develop. Maintenance budgets are therefore as important as planting targets. In one municipal programme, officials initially reported success by counting the number of saplings placed in the ground. A later audit found that survival rates varied sharply between districts, partly because responsibility for watering was unclear. The city changed its reporting system: departments were asked to record the condition of trees after one, three and five years, not simply the number planted.`],
 ["F",`The social effects of urban trees are harder to measure than temperature or rainfall, but they are not necessarily less significant. Shaded streets can encourage walking, and well-maintained parks may provide places for neighbours to meet. Some studies associate access to green space with improved reported wellbeing, although researchers warn that such findings do not prove that trees alone cause the improvement. Safety, transport links, noise and the quality of public facilities also influence whether residents use a park. Consultation is therefore important. A planting scheme designed without local input may place trees where they obstruct shop signs, block useful sightlines or fail to provide shade where people actually wait.`],
 ["G",`A growing number of city authorities now map tree cover alongside indicators such as income, surface temperature and population density. These maps can reveal where environmental benefits are scarce and help direct investment. Nevertheless, measurement has limitations. Satellite images may identify canopy cover but cannot always show whether a tree is healthy, whether a footpath is accessible or whether residents feel welcome. Urban forestry specialists argue that maps should guide decisions rather than make them. The long-term aim is not to maximise the number of trees in every street, but to build a varied, healthy and fairly distributed network that responds to the needs of the people who live there.`]
 ],
 instruction:`<strong>Questions 1–5:</strong> Match each statement with the correct paragraph, A–G. You may use each letter more than once. <br><strong>Questions 6–9:</strong> Complete the notes using <strong>NO MORE THAN TWO WORDS</strong> from the passage. <br><strong>Questions 10–13:</strong> Choose the correct letter, A, B, C or D.`,
 questions:[
 {n:1,p:"A planting programme changed how it measured success after discovering that many saplings did not survive.",type:"select",opts:["A","B","C","D","E","F","G"],a:"E",exp:"Paragraph E describes the audit and the move from counting saplings to checking survival at later intervals."},
 {n:2,p:"The benefits of greenery may be distributed unequally between districts.",type:"select",opts:["A","B","C","D","E","F","G"],a:"A",exp:"Paragraph A contrasts tree-rich wealthier areas with districts facing greater environmental pressures."},
 {n:3,p:"A lack of variety among planted species can increase vulnerability to pests.",type:"select",opts:["A","B","C","D","E","F","G"],a:"D",exp:"Paragraph D explains that a disease or pest may spread through a population with little genetic variety."},
 {n:4,p:"Green spaces can influence social life, although several other factors affect their use.",type:"select",opts:["A","B","C","D","E","F","G"],a:"F",exp:"Paragraph F discusses meeting places, wellbeing research and other influences on park use."},
 {n:5,p:"Combining planted areas with engineered features can help manage storm water.",type:"select",opts:["A","B","C","D","E","F","G"],a:"C",exp:"Paragraph C recommends combining trees with permeable paving, rain gardens and storage areas."},
 {n:6,p:"The gradual release of stored heat from buildings and roads contributes to the urban ________.",type:"text",a:["heat island"],exp:"The passage names this effect the urban heat island."},
 {n:7,p:"Water released from leaves as vapour is part of a process called ________.",type:"text",a:["transpiration"],exp:"Paragraph B identifies transpiration as the release of water vapour from leaves."},
 {n:8,p:"Roots can improve the structure of ________, helping water move through it.",type:"text",a:["soil"],exp:"Paragraph C says roots improve soil structure and create channels."},
 {n:9,p:"A later audit found that responsibility for ________ was unclear.",type:"text",a:["watering"],exp:"Paragraph E explicitly identifies unclear responsibility for watering."},
 {n:10,p:"What is the writer's main point about the cooling effect of trees?",type:"mcq",opts:["A. It is identical for every tree species.","B. It depends partly on the tree and its surroundings.","C. It is produced only by blocking sunlight.","D. It is strongest where pavements are narrow."],a:"B",exp:"Paragraph B lists species, moisture, canopy size and building arrangement as factors."},
 {n:11,p:"Why does the passage say trees cannot replace drainage infrastructure?",type:"mcq",opts:["A. Their contribution is useful but limited and works best in combination with other measures.","B. Tree roots always prevent water from entering the soil.","C. Trees increase the amount of rainfall in cities.","D. Drainage systems are needed only in rural areas."],a:"A",exp:"Paragraph C says trees contribute to water management but should be combined with engineered and landscape features."},
 {n:12,p:"What concern do urban ecologists raise about approved species lists?",type:"mcq",opts:["A. They are always too expensive to maintain.","B. They encourage the planting of trees that grow too slowly.","C. They may reduce genetic diversity if they are too restrictive.","D. They prevent residents from taking part in consultation."],a:"C",exp:"Paragraph D warns that a short list can leave the urban forest genetically uniform and vulnerable."},
 {n:13,p:"What does the writer suggest about maps of urban tree cover?",type:"mcq",opts:["A. They provide all the information needed to plan a planting scheme.","B. They should inform decisions but cannot replace local knowledge.","C. They are useful only for measuring the age of trees.","D. They should be used to maximise tree numbers in every street."],a:"B",exp:"Paragraph G explains that maps have limitations and should guide rather than determine decisions."}
 ]
},
{
 title:"When rivers change their course", range:"Questions 14–26", suggested:"Suggested: 20 minutes",
 paragraphs:[
 ["A",`A river may appear to occupy a fixed channel, but its course is continually shaped by water, sediment and the materials beneath it. In some landscapes, change is slow: a bend gradually migrates across a floodplain over many decades. Elsewhere, a river can abandon one channel and establish another after a major flood. These changes are not random accidents. They reflect the balance between the energy carried by flowing water and the resistance offered by the bed, banks and surrounding land. Understanding that balance matters to communities that build roads, farms and settlements beside rivers.`],
 ["B",`As water moves around a bend, its velocity is not distributed evenly across the channel. The fastest current is often directed towards the outer bank, where it can remove material through erosion. On the inner bank, where flow is commonly slower, sand and gravel may be deposited. Over time, this combination can make a bend more pronounced and shift its position downstream. The process is known as meander migration. It can create valuable wetland habitats, but it may also threaten fields, buildings and infrastructure placed too close to the river's changing edge.`],
 ["C",`A flood can accelerate these processes, particularly when water rises above the banks and spreads across the floodplain. Floodwater may cut across a narrow strip of land between two parts of a bend, creating a shorter route. If enough water follows the new route, the river may establish a straighter channel and leave the former loop partly or entirely disconnected. This event is called a cutoff. The abandoned bend can become an oxbow lake, although it may gradually fill with sediment and vegetation. Not every flood produces a cutoff; the outcome depends on local topography, sediment and the duration and force of the high water.`],
 ["D",`Sediment is central to the formation and maintenance of river channels. It includes particles ranging from fine clay to large stones, and each size behaves differently in moving water. Fine material can remain suspended for long periods, while heavier grains move along the bed when the current is strong enough. When flow slows, some of this material settles. A river therefore transports sediment from one location and deposits it in another, helping to shape bars, banks and floodplains. Dams can interrupt this movement by trapping sediment in reservoirs, sometimes leaving downstream reaches with less material available to replace what erosion removes.`],
 ["E",`For much of the last century, river management often aimed to keep channels in a fixed position. Engineers straightened bends, built embankments and used concrete or stone to protect selected banks. Such measures can reduce erosion at a particular site, but they may transfer the problem downstream or increase the speed of water. A channel that has less room to spread during a flood can pass a larger volume of water to another settlement. In addition, hard engineering may disconnect a river from wetlands that once stored floodwater and supported wildlife. The effects depend on the design and location of each intervention.`],
 ["F",`An alternative approach is often described as working with natural processes. It may involve restoring wetlands, allowing selected floodplain areas to flood, planting vegetation along banks or moving vulnerable infrastructure away from the river. These measures do not eliminate flood risk, and they may be difficult where land is expensive or ownership is fragmented. However, they can provide several benefits at once: temporary water storage, habitat, recreation and improved water quality. Projects are most successful when residents, farmers, engineers and ecologists are involved early, since each group understands different aspects of the landscape.`],
 ["G",`Modern river research combines field observations with aerial photographs, satellite images and computer models. Repeated images can show how a channel has moved, while instruments measure water level, velocity and sediment concentration. Models help researchers test possible outcomes under different rainfall or land-use scenarios. They are not perfect forecasts: small changes in vegetation, debris or local geology can alter the result. For this reason, specialists increasingly present model outputs as ranges of possible futures rather than as a single prediction. Monitoring after a project is completed remains essential, because a river's response may take years to become clear.`]
 ],
 instruction:`<strong>Questions 14–18:</strong> Do the following statements agree with the information in the passage? Write <strong>TRUE</strong>, <strong>FALSE</strong> or <strong>NOT GIVEN</strong>. <br><strong>Questions 19–22:</strong> Complete the summary using <strong>NO MORE THAN TWO WORDS</strong> from the passage. <br><strong>Questions 23–26:</strong> Choose the correct letter, A, B, C or D.`,
 questions:[
 {n:14,p:"The position of a river channel can change even when no major flood occurs.",type:"select",opts:["TRUE","FALSE","NOT GIVEN"],a:"TRUE",exp:"Paragraph A says bends can migrate gradually over many decades."},
 {n:15,p:"The fastest current in a river bend is generally found beside the inner bank.",type:"select",opts:["TRUE","FALSE","NOT GIVEN"],a:"FALSE",exp:"Paragraph B says the fastest current is often directed towards the outer bank."},
 {n:16,p:"Every flood causes a river to abandon one of its channels.",type:"select",opts:["TRUE","FALSE","NOT GIVEN"],a:"FALSE",exp:"Paragraph C explicitly says not every flood produces a cutoff."},
 {n:17,p:"The passage gives the names of particular rivers where dams have caused sediment shortages.",type:"select",opts:["TRUE","FALSE","NOT GIVEN"],a:"NOT GIVEN",exp:"Dams and downstream sediment effects are discussed, but no river names are supplied."},
 {n:18,p:"The passage suggests that computer models can predict river behaviour with complete certainty.",type:"select",opts:["TRUE","FALSE","NOT GIVEN"],a:"FALSE",exp:"Paragraph G stresses uncertainty and presents model outputs as ranges of possible futures."},
 {n:19,p:"The gradual movement of a bend is known as meander ________.",type:"text",a:["migration"],exp:"Paragraph B names the process meander migration."},
 {n:20,p:"A disconnected former bend may develop into an ________ lake.",type:"text",a:["oxbow"],exp:"Paragraph C describes the formation of an oxbow lake."},
 {n:21,p:"Dams may trap sediment in their ________.",type:"text",a:["reservoirs"],exp:"Paragraph D says dams can trap sediment in reservoirs."},
 {n:22,p:"One natural-process measure involves restoring ________.",type:"text",a:["wetlands"],exp:"Paragraph F lists restoring wetlands as one possible measure."},
 {n:23,p:"What happens on the inner bank of a meander in the process described?",type:"mcq",opts:["A. Material is commonly deposited as the flow slows.","B. The channel always becomes deeper through erosion.","C. Water stops moving completely.","D. The river immediately forms an oxbow lake."],a:"A",exp:"Paragraph B links slower flow on the inner bank with deposition of sand and gravel."},
 {n:24,p:"Why can a river cutoff occur during a flood?",type:"mcq",opts:["A. The river loses all of its sediment.","B. Floodwater may create a shorter route across a narrow neck of land.","C. The outer bank becomes permanently resistant to erosion.","D. A dam forces all water into an underground channel."],a:"B",exp:"Paragraph C describes floodwater cutting across a narrow strip and establishing a shorter route."},
 {n:25,p:"What is one possible disadvantage of hard river engineering?",type:"mcq",opts:["A. It always increases wetland area.","B. It prevents water from reaching downstream settlements.","C. It can transfer erosion or flood pressure to another place.","D. It makes rivers stop transporting sediment."],a:"C",exp:"Paragraph E says interventions may transfer the problem downstream or increase water speed."},
 {n:26,p:"According to the passage, why is post-project monitoring important?",type:"mcq",opts:["A. River responses may take years to become apparent.","B. Satellite images cannot record any channel movement.","C. Models are never used before construction.","D. Monitoring guarantees that floods will not occur."],a:"A",exp:"Paragraph G says a river's response may take years to become clear."}
 ]
},
{
 title:"The changing value of scientific collections", range:"Questions 27–40", suggested:"Suggested: 20 minutes",
 paragraphs:[
 ["A",`Natural history museums contain collections assembled over centuries: pressed plants, insects pinned in cases, shells, fossils, rocks and preserved animal specimens. Many were gathered when travel was slow and scientific instruments were relatively simple. At the time, a specimen might be collected mainly to identify a species or illustrate a feature in a textbook. Today, researchers increasingly recognise that these objects can answer questions that their collectors could not have imagined. A bird skin, for example, may retain chemical traces of the environment in which the bird lived, while a dried plant can provide evidence of when a species flowered in a particular region.`],
 ["B",`The scientific value of a collection depends partly on the information attached to each object. A specimen labelled only with a broad country name may be less useful than one with a precise location, collection date and details of habitat. Older labels are sometimes incomplete, written in handwriting that is difficult to read or based on place names that have since changed. Museum staff therefore spend considerable time checking catalogues, comparing historical maps and linking objects to field notebooks. This work may seem administrative, but without reliable records a specimen's scientific meaning can be greatly reduced.`],
 ["C",`Digital imaging has made collections easier to examine without handling fragile objects. High-resolution photographs can reveal surface patterns, while three-dimensional scans allow researchers to rotate a model on a screen and measure features from different angles. Digitisation also makes it possible for specialists in different countries to inspect the same material. Yet an image cannot preserve every property of an object. Colour may change under different lighting, a scan may miss internal structures, and some chemical tests still require access to the physical specimen. Digital records are therefore an extension of collections, not a complete substitute for them.`],
 ["D",`One emerging field uses museum material to investigate environmental change. By comparing specimens collected at different dates, scientists can examine shifts in the distribution of species or changes in the timing of seasonal events. Some preserved organisms also contain pollutants absorbed during life. Such evidence can extend the historical record far beyond the period covered by routine environmental monitoring. However, researchers must account for changes in collecting practice. If collectors once favoured large or unusual specimens, a collection may not represent the full population. Apparent changes may reflect human choices about what was collected rather than changes in nature.`],
 ["E",`The use of collections also raises ethical questions. Many objects were acquired during colonial expeditions, when local communities had little power to influence what was taken or how it was displayed. In recent years, museums have faced growing requests for the return of ancestral remains and culturally significant objects. Institutions have responded in different ways, from long-term loans and shared exhibitions to formal repatriation. The process can be complex because ownership records may be incomplete and several communities may have a legitimate connection to an object. Museum professionals increasingly argue that decisions should involve sustained dialogue rather than being treated as a purely legal transaction.`],
 ["F",`Collections are expensive to maintain. Specimens may need stable temperature and humidity, protection from pests and careful handling by trained staff. Funding is often easier to obtain for new exhibitions than for storage rooms that visitors rarely see. This creates a tension: a museum may be encouraged to acquire more material while struggling to care properly for what it already holds. Some institutions have begun reviewing their acquisition policies and sharing specialist facilities. Others collaborate with universities or regional museums so that equipment and expertise can be used by several organisations.`],
 ["G",`The future of scientific collections is likely to depend on combining physical care, accessible data and responsible governance. Researchers need to know not only what an object is, but where it came from, how it was collected and whether its use is appropriate. Public access can increase the value of collections, but unrestricted access is not always suitable, particularly where culturally sensitive material is involved. The challenge is to make collections more useful without treating them as ownerless stores of data. Their importance lies in the evidence they preserve and in the relationships between institutions, researchers and the communities connected to them.`]
 ],
 instruction:`<strong>Questions 27–32:</strong> Match each statement with the correct paragraph, A–G. You may use each letter more than once. <br><strong>Questions 33–36:</strong> Complete the notes using <strong>NO MORE THAN THREE WORDS</strong> from the passage. <br><strong>Questions 37–40:</strong> Choose the correct letter, A, B, C or D.`,
 questions:[
 {n:27,p:"The original purpose of collecting an object may differ from the questions it can answer today.",type:"select",opts:["A","B","C","D","E","F","G"],a:"A",exp:"Paragraph A explains that specimens collected for identification can now answer new research questions."},
 {n:28,p:"The reliability of research can be affected by the preferences of earlier collectors.",type:"select",opts:["A","B","C","D","E","F","G"],a:"D",exp:"Paragraph D warns that collectors' preferences may make collections unrepresentative."},
 {n:29,p:"Returning objects may require discussion with more than one interested group.",type:"select",opts:["A","B","C","D","E","F","G"],a:"E",exp:"Paragraph E notes that several communities may have a legitimate connection to an object."},
 {n:30,p:"A digital representation cannot communicate every characteristic of the original item.",type:"select",opts:["A","B","C","D","E","F","G"],a:"C",exp:"Paragraph C describes limitations of images and scans, including missing internal or chemical information."},
 {n:31,p:"A seemingly routine task is essential to preserving the research value of objects.",type:"select",opts:["A","B","C","D","E","F","G"],a:"B",exp:"Paragraph B explains the importance of checking and improving specimen records."},
 {n:32,p:"Institutions are exploring ways to share the cost of specialist resources.",type:"select",opts:["A","B","C","D","E","F","G"],a:"F",exp:"Paragraph F describes shared facilities and collaboration between institutions."},
 {n:33,p:"A plant specimen may show when a species ________ in a particular region.",type:"text",a:["flowered"],exp:"Paragraph A says a dried plant can show when a species flowered."},
 {n:34,p:"A useful specimen record may include its precise location, collection date and details of ________.",type:"text",a:["habitat"],exp:"Paragraph B lists details of habitat as useful information."},
 {n:35,p:"Three-dimensional scans can help researchers measure features from different ________.",type:"text",a:["angles"],exp:"Paragraph C says scans allow measurement from different angles."},
 {n:36,p:"Specimens may require protection from ________ as part of routine care.",type:"text",a:["pests"],exp:"Paragraph F lists protection from pests among the maintenance requirements."},
 {n:37,p:"What is the main argument of the passage?",type:"mcq",opts:["A. Scientific collections have become less useful as technology improves.","B. Collections can support new research, but their records, care and governance matter.","C. Museums should stop acquiring all physical specimens.","D. Digital images should replace all museum objects."],a:"B",exp:"Across the passage, the writer balances new scientific uses with documentation, preservation and ethical responsibilities."},
 {n:38,p:"Why might a specimen with only a broad country name be less useful?",type:"mcq",opts:["A. It may be impossible to identify the species.","B. It cannot be photographed digitally.","C. It provides insufficient location context for some research.","D. It is always culturally sensitive."],a:"C",exp:"Paragraph B says precise location and contextual details make a specimen more useful."},
 {n:39,p:"What difficulty can arise when scientists compare historical collections?",type:"mcq",opts:["A. Past collecting methods may have produced an unrepresentative sample.","B. Older specimens never contain environmental evidence.","C. Every museum used identical collection methods.","D. Environmental monitoring began before collections existed."],a:"A",exp:"Paragraph D explains that collectors may have selected particular sizes or unusual examples."},
 {n:40,p:"What does the writer imply about access to collections?",type:"mcq",opts:["A. All material should be freely available without restriction.","B. Public access is valuable, but sensitive material may require limits.","C. Only museum employees should be allowed to view collections.","D. Access decisions should be based entirely on ownership law."],a:"B",exp:"Paragraph G supports wider access while recognising that culturally sensitive material may need protection."}
 ]
}
];

const allQuestions = passages.flatMap(p=>p.questions);
const STORAGE_KEY = 'ielts-reading-hub-v2';
const TEST_SECONDS = 60 * 60;
const answers = {};
const flagged = new Set();
let currentPassage=0, currentQuestion=1, remaining=TEST_SECONDS, deadline=null, timerHandle=null, submitted=false;
const $ = id => document.getElementById(id);
const esc = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm = value => String(value ?? '').trim().toLowerCase().normalize('NFKC').replace(/[’']/g,"'").replace(/[.,;:!?]/g,'').replace(/\s+/g,' ');
const isAnswered = q => norm(answers[q.n]) !== '';
function isCorrect(q){
 const value=norm(answers[q.n]); if(!value)return false;
 const accepted=Array.isArray(q.a)?q.a:[q.a];
 return accepted.some(a=>norm(a)===value);
}
function saveState(){
 if(submitted)return;
 const data={answers,flagged:[...flagged],currentPassage,currentQuestion,deadline,started:!!deadline};
 try{localStorage.setItem(STORAGE_KEY,JSON.stringify(data));}catch(e){console.warn('Progress could not be saved',e);}
}
function loadState(){
 try{
  const data=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');
  if(!data||!data.started||!data.deadline)return false;
  if(data.deadline<=Date.now()){localStorage.removeItem(STORAGE_KEY);return false;}
  Object.assign(answers,data.answers||{});(data.flagged||[]).forEach(n=>flagged.add(Number(n)));
  currentPassage=Math.max(0,Math.min(2,Number(data.currentPassage)||0));
  currentQuestion=Math.max(1,Math.min(40,Number(data.currentQuestion)||1));deadline=Number(data.deadline);
  remaining=Math.max(0,Math.ceil((deadline-Date.now())/1000));return true;
 }catch(e){return false;}
}
function updateProgress(){
 const count=allQuestions.filter(isAnswered).length;
 $('progressText').textContent=`${count} of 40 answered`;
 const p=passages[currentPassage];$('sectionCount').textContent=`${p.questions.filter(isAnswered).length} / ${p.questions.length}`;
}
function updateNav(){
 $('allQuestionNav').innerHTML=allQuestions.map(q=>`<button class="nav-number ${isAnswered(q)?'answered':''} ${flagged.has(q.n)?'flagged':''} ${currentQuestion===q.n?'active':''}" data-jump="${q.n}" aria-label="Go to question ${q.n}" title="Question ${q.n}${flagged.has(q.n)?', flagged':''}">${q.n}</button>`).join('');
 $('allQuestionNav').querySelectorAll('[data-jump]').forEach(b=>b.addEventListener('click',()=>goToQuestion(Number(b.dataset.jump))));
}
function renderPassage(){
 const p=passages[currentPassage];
 $('passageKicker').textContent=`READING PASSAGE ${currentPassage+1}`;$('passageTitle').textContent=p.title;$('questionRange').textContent=p.range;
 $('passageContent').innerHTML=p.paragraphs.map(([letter,body])=>`<h3>${letter}</h3><p>${esc(body)}</p>`).join('');
 $('questionInstructions').innerHTML=p.instruction;
 $('questionsList').innerHTML=p.questions.map(q=>{
  let control='';
  if(q.type==='text') control=`<input class="answer-input" type="text" autocomplete="off" spellcheck="false" maxlength="80" placeholder="Type your answer…" aria-label="Answer for question ${q.n}" data-answer="${q.n}" value="${esc(answers[q.n]||'')}">`;
  else if(q.type==='select') control=`<select class="answer-select" aria-label="Select answer for question ${q.n}" data-answer="${q.n}"><option value="">Select an option…</option>${q.opts.map(o=>`<option value="${esc(o)}" ${answers[q.n]===o?'selected':''}>${esc(o)}</option>`).join('')}</select>`;
   else {
    const isTFNG=q.opts.length===3 && ['TRUE','FALSE','NOT GIVEN'].every(v=>q.opts.includes(v));
    control=`<div class="answer-options${isTFNG?' answer-options--tfng':''}">${q.opts.map(o=>{const v=o.charAt(0);return `<label class="option-label"><input type="radio" name="q${q.n}" data-answer="${q.n}" value="${esc(v)}" ${answers[q.n]===v?'checked':''}><span>${esc(o)}</span></label>`}).join('')}</div>`;
   }
  return `<div class="question-card ${currentQuestion===q.n?'current':''}" id="question-${q.n}"><div class="question-top"><span class="q-number">${q.n}</span><div class="q-prompt">${esc(q.p)}</div><button class="flag-button ${flagged.has(q.n)?'flagged':''}" data-flag="${q.n}" aria-label="Flag question ${q.n}" title="Flag for review">⚑</button></div>${control}</div>`;
 }).join('');
 $('questionsList').querySelectorAll('[data-answer]').forEach(el=>el.addEventListener(el.type==='radio'||el.tagName==='SELECT'?'change':'input',e=>{
  answers[Number(e.target.dataset.answer)]=e.target.value;updateProgress();updateNav();saveState();
 }));
 $('questionsList').querySelectorAll('[data-flag]').forEach(el=>el.addEventListener('click',()=>{
  const n=Number(el.dataset.flag);flagged.has(n)?flagged.delete(n):flagged.add(n);el.classList.toggle('flagged',flagged.has(n));updateNav();saveState();
 }));
 document.querySelectorAll('.passage-tab').forEach((b,i)=>{b.classList.toggle('active',i===currentPassage);b.setAttribute('aria-selected',i===currentPassage?'true':'false');});
 $('prevPassageBtn').disabled=currentPassage===0;$('nextPassageBtn').textContent=currentPassage===2?'Review unanswered →':'Next passage →';
 updateProgress();updateNav();
}
function goToQuestion(n){
 currentQuestion=n;const idx=passages.findIndex(p=>p.questions.some(q=>q.n===n));
 if(idx!==currentPassage){currentPassage=idx;renderPassage();}
 else document.querySelectorAll('.question-card').forEach(c=>c.classList.toggle('current',c.id===`question-${n}`));
 updateNav();saveState();const card=$(`question-${n}`);if(card)card.scrollIntoView({behavior:'smooth',block:'nearest'});
}
function changePassage(i){currentPassage=Math.max(0,Math.min(2,i));currentQuestion=passages[currentPassage].questions[0].n;renderPassage();saveState();window.scrollTo({top:0,behavior:'smooth'});}
function formatTime(s){return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;}
function updateTimer(){
 remaining=Math.max(0,Math.ceil((deadline-Date.now())/1000));$('timer').textContent=formatTime(remaining);$('timer').parentElement.classList.toggle('warning',remaining<=300);
 if(remaining<=0){clearInterval(timerHandle);finishTest(true);}
}
function startClock(){if(!deadline)deadline=Date.now()+TEST_SECONDS*1000;updateTimer();clearInterval(timerHandle);timerHandle=setInterval(updateTimer,500);saveState();}
function startTest(resume=false){
 document.body.classList.add('exam-mode');
 $('dashboardScreen').classList.add('hidden');$('welcomeScreen').classList.add('hidden');$('testScreen').classList.remove('hidden');renderPassage();startClock();
 if(resume)$('resumeNotice').classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'});
}
function openSubmitModal(auto=false){
 const unanswered=allQuestions.filter(q=>!isAnswered(q)).length;
 $('modalTitle').textContent=auto?'Time is up':'Submit your test?';
 $('modalMessage').textContent=auto?'The 60-minute time limit has ended. Your answers will now be scored.':`You have ${unanswered} unanswered question${unanswered===1?'':'s'} and ${flagged.size} flagged question${flagged.size===1?'':'s'}. Once submitted, you cannot change your answers.`;
 $('keepWorkingBtn').style.display=auto?'none':'inline-block';$('modalBackdrop').classList.remove('hidden');
}
function submitTest(){if(!submitted)openSubmitModal(false);}
function estimateBand(score){
 // Indicative Academic Reading conversion only; actual thresholds vary by test form.
 if(score>=39)return '9.0';if(score>=37)return '8.5';if(score>=35)return '8.0';if(score>=33)return '7.5';if(score>=30)return '7.0';if(score>=27)return '6.5';if(score>=23)return '6.0';if(score>=19)return '5.5';if(score>=15)return '5.0';if(score>=13)return '4.5';if(score>=10)return '4.0';if(score>=8)return '3.5';if(score>=6)return '3.0';if(score>=4)return '2.5';return 'Below 2.5';
}
function finishTest(auto=false){
 if(submitted)return;document.body.classList.remove('exam-mode');submitted=true;clearInterval(timerHandle);$('modalBackdrop').classList.add('hidden');
 const correct=allQuestions.filter(isCorrect).length,blank=allQuestions.filter(q=>!isAnswered(q)).length,wrong=40-correct-blank,pct=Math.round(correct/40*100);
 $('dashboardScreen').classList.add('hidden');$('testScreen').classList.add('hidden');$('welcomeScreen').classList.add('hidden');$('resultsScreen').classList.remove('hidden');
 $('scoreNumber').textContent=correct;$('scorePercent').textContent=`${pct}% correct`;$('scoreBar').style.width=pct+'%';$('correctCount').textContent=correct;$('wrongCount').textContent=wrong;$('blankCount').textContent=blank;
 $('bandEstimate').textContent=estimateBand(correct);saveAttemptToHistory(correct,pct,$('bandEstimate').textContent);
 const elapsed=Math.max(0,TEST_SECONDS-remaining);$('resultTime').textContent=formatTime(elapsed);$('resultAccuracy').textContent=pct+'%';
 $('passageBreakdown').innerHTML=passages.map((p,i)=>{const right=p.questions.filter(isCorrect).length;const total=p.questions.length;const ratio=Math.round(right/total*100);return `<div class="passage-result-row"><div><b>Passage ${i+1} · ${esc(p.title)}</b><span>${right}/${total} correct</span></div><div class="passage-result-track"><i style="width:${ratio}%"></i></div></div>`;}).join('');
 $('bandCaveat').textContent='Indicative estimate only. IELTS conversion thresholds vary between test versions; this is not an official score.';
 $('resultMessage').textContent=auto?'Time expired. Review every explanation before your next attempt.':'Your practice test has been marked. Review the explanations to identify patterns in your errors.';
 const types=[...new Set(allQuestions.map(q=>q.type))];
 $('typeBreakdown').innerHTML=types.map(type=>{const qs=allQuestions.filter(q=>q.type===type),right=qs.filter(isCorrect).length;const label=type==='mcq'?'Multiple choice':type==='text'?'Completion':'Selection / T-F-NG';return `<div class="type-row"><span>${label}</span><strong>${right}/${qs.length}</strong><div class="mini-track"><i style="width:${Math.round(right/qs.length*100)}%"></i></div></div>`}).join('');
 $('reviewList').innerHTML=allQuestions.map(q=>{const ok=isCorrect(q),blankAnswer=!isAnswered(q),right=Array.isArray(q.a)?q.a[0]:q.a;return `<div class="review-item"><span class="review-num">${q.n}</span><div><p>${esc(q.p)}</p><small>Your answer: ${blankAnswer?'Not answered':esc(answers[q.n])} · Correct answer: ${esc(right)}</small><small>${esc(q.exp)}</small></div><span class="review-status ${ok?'good':'bad'}">${ok?'Correct':blankAnswer?'Blank':'Incorrect'}</span></div>`}).join('');
 localStorage.removeItem(STORAGE_KEY);window.scrollTo({top:0,behavior:'smooth'});
}
function resetTest(){
 document.body.classList.add('exam-mode');clearInterval(timerHandle);Object.keys(answers).forEach(k=>delete answers[k]);flagged.clear();currentPassage=0;currentQuestion=1;remaining=TEST_SECONDS;deadline=null;submitted=false;localStorage.removeItem(STORAGE_KEY);
 $('dashboardScreen').classList.add('hidden');$('resultsScreen').classList.add('hidden');$('testScreen').classList.add('hidden');$('resumeNotice').classList.add('hidden');$('welcomeScreen').classList.remove('hidden');$('timer').textContent='60:00';$('timer').parentElement.classList.remove('warning');window.scrollTo({top:0,behavior:'smooth'});
}
function resumeAvailable(){const ok=loadState();if(ok){$('resumeButton').classList.remove('hidden');$('resumeSummary').textContent=`An unfinished test was found with ${allQuestions.filter(isAnswered).length} answers saved.`;}else $('resumeButton').classList.add('hidden');}

$('startBtn').addEventListener('click',()=>startTest(false));
$('resumeButton').addEventListener('click',()=>startTest(true));
$('discardProgressBtn').addEventListener('click',()=>{localStorage.removeItem(STORAGE_KEY);Object.keys(answers).forEach(k=>delete answers[k]);flagged.clear();deadline=null;remaining=TEST_SECONDS;resumeAvailable();});
document.querySelectorAll('.passage-tab').forEach(b=>b.addEventListener('click',()=>changePassage(Number(b.dataset.passage))));
$('prevPassageBtn').addEventListener('click',()=>changePassage(currentPassage-1));
$('nextPassageBtn').addEventListener('click',()=>{if(currentPassage===2){const unanswered=allQuestions.filter(q=>!isAnswered(q));goToQuestion(unanswered.length?unanswered[0].n:1);}else changePassage(currentPassage+1);});
$('submitBtn').addEventListener('click',submitTest);$('bottomSubmitBtn').addEventListener('click',submitTest);$('confirmSubmitBtn').addEventListener('click',()=>finishTest(false));
$('keepWorkingBtn').addEventListener('click',()=>$('modalBackdrop').classList.add('hidden'));$('modalClose').addEventListener('click',()=>$('modalBackdrop').classList.add('hidden'));
$('retakeBtn').addEventListener('click',resetTest);
$('instructionsBtn').addEventListener('click',()=>$('instructionsModal').classList.remove('hidden'));
$('instructionsClose').addEventListener('click',()=>$('instructionsModal').classList.add('hidden'));
window.addEventListener('beforeunload',saveState);
// Desktop passage/question splitter: drag or use arrow keys.
(function setupPanelSplitter(){
 const handle=$('panelSplitter'),workspace=document.querySelector('.workspace');
 if(!handle||!workspace)return;
 let dragging=false;
 const setFromX=x=>{const rect=workspace.getBoundingClientRect();const ratio=Math.max(.30,Math.min(.70,(x-rect.left)/rect.width));workspace.style.gridTemplateColumns=`minmax(280px, ${ratio}fr) 12px minmax(320px, ${1-ratio}fr)`;};
 handle.addEventListener('pointerdown',e=>{if(window.matchMedia('(max-width: 900px)').matches)return;dragging=true;handle.classList.add('dragging');handle.setPointerCapture(e.pointerId);setFromX(e.clientX);});
 handle.addEventListener('pointermove',e=>{if(dragging)setFromX(e.clientX);});
 const stop=()=>{dragging=false;handle.classList.remove('dragging');};
 handle.addEventListener('pointerup',stop);handle.addEventListener('pointercancel',stop);
 handle.addEventListener('keydown',e=>{if(e.key!=='ArrowLeft'&&e.key!=='ArrowRight')return;e.preventDefault();const rect=workspace.getBoundingClientRect();setFromX(rect.left+rect.width*.5+(e.key==='ArrowLeft'?-24:24));});
})();
resumeAvailable();


/* Dashboard, local profile and real-result analytics (v3.0). */
const HISTORY_KEY='ielts-reading-history-v3';
const PROFILE_KEY='ielts-reading-profile-v3';
const VIEW_IDS={dashboard:'dashboardView',reading:'libraryView',listening:'placeholderView',writing:'placeholderView',speaking:'placeholderView',profile:'profileView',vocabulary:'vocabularyView',grammar:'grammarView'};
function readHistory(){try{return JSON.parse(localStorage.getItem(HISTORY_KEY)||'[]');}catch(e){return [];}}
function readProfile(){try{return JSON.parse(localStorage.getItem(PROFILE_KEY)||'{}');}catch(e){return {};}}
function saveProfile(data){try{localStorage.setItem(PROFILE_KEY,JSON.stringify(data));}catch(e){}}
function showDashboardView(view){
  document.body.classList.remove('exam-mode');
  $('dashboardScreen').classList.remove('hidden');
  $('welcomeScreen').classList.add('hidden');$('testScreen').classList.add('hidden');$('resultsScreen').classList.add('hidden');
  Object.values(VIEW_IDS).forEach(id=>$(id)?.classList.add('hidden'));
  const id=VIEW_IDS[view]||'dashboardView';$(id)?.classList.remove('hidden');
  document.querySelectorAll('.side-link').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
  if(view==='listening'||view==='writing'||view==='speaking'){
    const label=view.charAt(0).toUpperCase()+view.slice(1);
    $('placeholderEyebrow').textContent='IELTS '+label.toUpperCase();
    $('placeholderTitle').textContent=label+' practice';
    $('placeholderDescription').textContent='The '+label.toLowerCase()+' practice area will be added when its test materials are ready.';
    $('placeholderHeading').textContent='No '+label.toLowerCase()+' tests available yet';
    $('placeholderText').textContent='You asked to keep this section visible. It will show your tests here when you provide the materials.';
  }
  if(view==='reading')renderLibrary('reading');
  if(view==='dashboard')renderDashboard();
  window.scrollTo({top:0,behavior:'smooth'});
}
function openReadingIntro(){
  document.body.classList.remove('exam-mode');
  $('dashboardScreen').classList.add('hidden');$('welcomeScreen').classList.remove('hidden');
  $('testScreen').classList.add('hidden');$('resultsScreen').classList.add('hidden');
  resumeAvailable();window.scrollTo({top:0,behavior:'smooth'});
}
function renderLibrary(skill){
  document.querySelectorAll('.skill-tab').forEach(b=>b.classList.toggle('active',b.dataset.skill===skill));
  if(skill==='reading'){
    $('libraryContent').innerHTML=`<div class="library-intro"><span class="library-icon">▤</span><div><b>IELTS Academic Reading</b><p>3 original passages · 40 questions · 60 minutes. One complete practice test is currently available.</p></div></div><div class="library-filter"><span class="filter-chip active">All tests</span><span class="filter-chip">Available</span><span class="filter-chip muted-chip">More tests coming soon</span></div><div class="test-library-grid"><article class="library-test-card"><div class="test-card-top"><span class="available-pill">Available now</span><span class="difficulty-pill">Academic</span></div><h3>Reading Test 1</h3><p>Urban trees · Changing rivers · Scientific collections</p><div class="test-meta"><span>3 passages</span><span>40 questions</span><span>60 min</span></div><button class="primary-button library-start" id="libraryStartBtn">Start test →</button></article><article class="library-test-card locked-card"><div class="lock-mark">⌑</div><h3>Reading Test 2</h3><p>New original practice material will be added here.</p><span class="soon-pill">Coming soon</span></article><article class="library-test-card locked-card"><div class="lock-mark">⌑</div><h3>Reading Test 3</h3><p>New original practice material will be added here.</p><span class="soon-pill">Coming soon</span></article></div>`;
    $('libraryStartBtn').addEventListener('click',openReadingIntro);
  }else{
    const name=skill.charAt(0).toUpperCase()+skill.slice(1);
    $('libraryContent').innerHTML=`<div class="coming-panel"><span>✦</span><h3>No ${name.toLowerCase()} tests available yet</h3><p>${name} practice tests will appear here when the question sets are provided.</p><b class="soon-pill">Coming soon</b></div>`;
  }
}
function renderDashboard(){
  const history=readHistory();const profile=readProfile();const target=Number(profile.target||7);
  $('targetBandValue').textContent=target.toFixed(1);$('statTarget').textContent=target.toFixed(1);
  $('dashGreeting').textContent=profile.name?`Welcome back, ${profile.name}`:'Welcome to your IELTS dashboard';
  $('learnerName') && ($('learnerName').value=profile.name||'');
  $('targetBandSelect') && ($('targetBandSelect').value=target.toFixed(1));
  $('targetModalSelect') && ($('targetModalSelect').value=target.toFixed(1));
  $('statTests').textContent=history.length;
  if(history.length){
    const bands=history.map(x=>Number(x.band)||0);const best=Math.max(...bands);
    const accuracy=Math.round(history.reduce((s,x)=>s+(Number(x.accuracy)||0),0)/history.length);
    $('statBestBand').textContent=best.toFixed(1);$('statBestCaption').textContent=`Best from ${history.length} completed attempt${history.length===1?'':'s'}`;
    $('statAccuracy').textContent=accuracy+'%';$('statAccuracyCaption').textContent='Average across completed attempts';
    const gap=target-best;$('statGap').textContent=gap<=0?'Target reached in a recorded attempt':`${gap.toFixed(1)} band${gap===0.1?'':'s'} below target`;
    $('dailyTitle').textContent='Review your latest Reading result';$('dailyText').textContent=`Your latest recorded attempt: ${history[history.length-1].correct}/40 correct. Review the question types where you lost marks.`;
    $('insightTitle').textContent=history.length>1?(bands[bands.length-1]>bands[bands.length-2]?'Your latest band estimate increased':'Keep working on consistency'):'Your first result has been recorded';
    $('insightText').textContent=history.length>1?`Latest estimated band ${bands[bands.length-1].toFixed(1)} compared with ${bands[bands.length-2].toFixed(1)} on the previous attempt. These estimates are indicative only.`:'Complete another test to create a meaningful trend. Your current chart uses only recorded attempts.';
  }else{
    $('statBestBand').textContent='—';$('statBestCaption').textContent='No completed tests yet';$('statAccuracy').textContent='—';$('statAccuracyCaption').textContent='Based on completed attempts';$('statGap').textContent='Set your goal and track the gap';
    $('dailyTitle').textContent='Start your first Reading practice test';$('dailyText').textContent='Complete a timed test to establish your baseline. Your analytics will update automatically.';
    $('insightTitle').textContent='Your learning dashboard is ready';$('insightText').textContent='Your results will be analysed here. No sample scores or invented progress are displayed.';
  }
  renderTrend(history,target);renderTypeChart(history);renderRecent(history);
}
function renderTrend(history,target){
  const host=$('trendChart');if(!history.length){host.innerHTML='<div class="empty-chart"><span>⌁</span><b>Your score history will appear here</b><small>Complete a Reading test to start building your trend chart.</small></div>';return;}
  const data=history.slice(-10);const W=620,H=220,L=38,R=16,T=18,B=34;const x=i=>L+(data.length===1?(W-L-R)/2:i*(W-L-R)/(data.length-1));const y=v=>T+(9-v)/9*(H-T-B);
  const pts=data.map((d,i)=>`${x(i)},${y(Number(d.band)||0)}`).join(' ');
  const area=`${L},${H-B} ${pts} ${x(data.length-1)},${H-B}`;
  let grid='';for(let v=0;v<=9;v+=3){grid+=`<line x1="${L}" y1="${y(v)}" x2="${W-R}" y2="${y(v)}" stroke="#e8edf4"/><text x="${L-12}" y="${y(v)+4}" text-anchor="end" font-size="10" fill="#8793a6">${v}</text>`;}
  const labels=data.map((d,i)=>`<text x="${x(i)}" y="${H-10}" text-anchor="middle" font-size="10" fill="#8793a6">#${i+1}</text>`).join('');
  const targetY=y(target);
  host.innerHTML=`<svg class="trend-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Reading band score trend from completed attempts">${grid}<line x1="${L}" y1="${targetY}" x2="${W-R}" y2="${targetY}" stroke="#d97777" stroke-width="2" stroke-dasharray="7 5"/><polygon points="${area}" fill="#315fce" opacity=".12"/><polyline points="${pts}" fill="none" stroke="#315fce" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>${data.map((d,i)=>`<circle cx="${x(i)}" cy="${y(Number(d.band)||0)}" r="4.5" fill="#315fce"><title>Attempt ${i+1}: band ${Number(d.band).toFixed(1)}</title></circle>`).join('')}${labels}</svg>`;
}
function renderTypeChart(history){
  const host=$('questionTypeChart');if(!history.length){host.innerHTML='<div class="empty-chart compact"><span>▥</span><b>Not enough data yet</b><small>Your first result will populate this chart.</small></div>';return;}
  const totals={};history.forEach(attempt=>(attempt.types||[]).forEach(t=>{if(!totals[t.name])totals[t.name]={right:0,total:0};totals[t.name].right+=t.right;totals[t.name].total+=t.total;}));
  const entries=Object.entries(totals);host.innerHTML=entries.map(([name,v])=>`<div class="type-bar-row"><div><span>${name}</span><b>${v.total?Math.round(v.right/v.total*100):0}%</b></div><div class="type-bar-track"><i style="width:${v.total?Math.round(v.right/v.total*100):0}%"></i></div></div>`).join('')||'<div class="empty-activity">Question-type data will appear after your first test.</div>';
}
function renderRecent(history){
 const host=$('recentActivity');if(!history.length){host.innerHTML='<div class="empty-activity">No completed tests yet. Your attempts will appear here.</div>';return;}
 host.innerHTML=history.slice(-4).reverse().map((h)=>`<div class="recent-item"><span class="recent-dot">▤</span><div><b>Academic Reading · Test 1</b><small>${new Date(h.date).toLocaleDateString()} · ${h.correct}/40 correct</small></div><strong>${Number(h.band).toFixed(1)}</strong></div>`).join('');
}
function saveAttemptToHistory(correct,accuracy,band){
 const typeNames={mcq:'Multiple choice',text:'Completion',select:'Matching / selection'};
 const types=[...new Set(allQuestions.map(q=>q.type))].map(type=>{const qs=allQuestions.filter(q=>q.type===type);return {name:typeNames[type]||type,right:qs.filter(isCorrect).length,total:qs.length};});
 const history=readHistory();history.push({date:new Date().toISOString(),correct,accuracy,band:Number.parseFloat(band)||0,types});
 try{localStorage.setItem(HISTORY_KEY,JSON.stringify(history.slice(-50)));}catch(e){}
}
function saveLearnerProfile(){
 const profile=readProfile();profile.name=$('learnerName').value.trim();profile.target=Number($('targetBandSelect').value)||7;saveProfile(profile);
 $('profileFeedback').textContent='Preferences saved on this device.';renderDashboard();
}
function openTargetModal(){$('targetModal').classList.remove('hidden');}
function saveTarget(){
 const profile=readProfile();profile.target=Number($('targetModalSelect').value)||7;saveProfile(profile);
 $('targetModal').classList.add('hidden');renderDashboard();
}
document.querySelectorAll('.side-link').forEach(b=>b.addEventListener('click',()=>showDashboardView(b.dataset.view)));
document.querySelectorAll('[data-open-view]').forEach(b=>b.addEventListener('click',()=>showDashboardView(b.dataset.openView)));
document.querySelectorAll('.skill-tab').forEach(b=>b.addEventListener('click',()=>renderLibrary(b.dataset.skill)));
$('brandHome').addEventListener('click',e=>{e.preventDefault();showDashboardView('dashboard');});
$('continueReadingBtn').addEventListener('click',openReadingIntro);$('dailyStartBtn').addEventListener('click',openReadingIntro);$('featuredStartBtn').addEventListener('click',openReadingIntro);
$('targetBandBtn').addEventListener('click',openTargetModal);$('targetModalClose').addEventListener('click',()=>$('targetModal').classList.add('hidden'));$('saveTargetModal').addEventListener('click',saveTarget);
$('saveProfileBtn').addEventListener('click',saveLearnerProfile);$('resultsHomeBtn').addEventListener('click',()=>showDashboardView('dashboard'));
$('backToDashboardBtn').addEventListener('click',()=>showDashboardView('dashboard'));
renderDashboard();renderLibrary('reading');
