const LV=[
{n:'Python Foundations',i:'🧱',t:['A <b>data type</b> tells Python what kind of value we store (numbers, text, True/False) and what we can do with it.','A <b>list</b> stores many values in one variable, written in square brackets: <code>[10, 20, 30]</code>.','Lists are <b>ordered</b>, <b>mutable</b> (changeable), <b>heterogeneous</b> (mixed types) and <b>indexed</b>.','<code>type()</code> tells you the type of any value.']},
{n:'List Explorer',i:'🔍',t:['Indexing starts at <b>0</b> from the left: the first item is <code>list[0]</code>.','Negative indexing starts at <b>-1</b> from the right: the last item is <code>list[-1]</code>.','Slicing <code>list[start:end]</code> includes <b>start</b> but excludes <b>end</b>.','Leave out start or end to go to the edge: <code>list[:2]</code>, <code>list[2:]</code>.']},
{n:'List Manipulation Lab',i:'🧪',t:['Change an item with its index: <code>list[1] = "kiwi"</code>.','Lists allow duplicate values.','Loop with <code>for x in list:</code>.','Check with <code>in</code> / <code>not in</code>, and count items with <code>len()</code>.']},
{n:'List Operations Challenge',i:'⚙️',t:['Add: <code>append()</code> (end), <code>insert(i, x)</code> (position), <code>extend()</code> (many items).','Remove: <code>remove(x)</code> by value, <code>pop()</code> by index (last by default), <code>del</code>, <code>clear()</code>.','Copy with <code>copy()</code> or <code>list()</code>. Join with <code>+</code> or <code>extend()</code>.']},
{n:'Python Master Challenge',i:'🚀',t:['An <b>array</b> (array module) holds items of the <b>same type</b> in contiguous memory, so it is memory-efficient.','Create one with <code>import array</code> then <code>array.array("i", [1, 2, 3])</code>. NumPy is the standard for advanced numeric work.','Lists can be sorted with <code>sort()</code> (<code>reverse=True</code> for descending); use <code>min()</code>, <code>max()</code>, <code>sum()</code>.','A <b>nested list</b> is a list inside a list: <code>c[3][2]</code>.']}];
const N=`nums = [10, 20, 30, 40, 50]\n`,P=`players = ["Ria", "Sam", "Tej"]\n`;
// [kind, question, code, options, answerIndex, hint, explanation]
const Q=[
['Concept','Why do we use data types in Python?',null,['They tell Python what kind of value is stored and what we can do with it','They change the colour of our code','They make the internet faster','They give names to our files'],0,'Think: is 5 + 5 the same as "5" + "5"?','A data type (int, str, bool, list…) tells Python how to treat a value. 5 + 5 gives 10, but "5" + "5" gives "55".'],
['Predict the output','What does this print?',`print(type([10, 20, 30]))`,[`<class 'list'>`,`<class 'tuple'>`,'[10, 20, 30]','list'],0,'type() reports the data type of what is inside the brackets.','Square brackets create a list, so type() reports <class \'list\'>.'],
['Scenario','A teacher wants to store the marks of 100 students. What is the smartest way in Python?',null,['Create 100 variables: m1, m2, m3 …','Store all 100 marks in one list','Write the marks in a comment','Use one variable and overwrite it 100 times'],1,'Which option lets ONE name hold MANY values?','A list keeps many values under one name, so you avoid creating 100 separate variables.'],
['Match the concept','Which list characteristic means you can add, remove or change items after the list is created?',null,['Ordered','Indexed','Mutable','Heterogeneous'],2,'Mutable = changeable.','Mutable means changeable. Ordered = fixed order, Indexed = access by position, Heterogeneous = mixed data types.'],
['Find the correct code','Which line correctly creates a list of fruits?',null,['fruits = ("apple", "banana")','fruits = {"apple", "banana"}','fruits = ["apple", "banana"]','fruits = <"apple", "banana">'],2,'Lists are written with square brackets.','Lists use square brackets []. Round brackets make a tuple and curly brackets make a set.'],
['Concept','Which list is heterogeneous (mixed data types)?',null,['[1, 2, 3]','["a", "b", "c"]','[5.5, 6.5]','["abc", 34, True]'],3,'Look for text, a number and a True/False in one list.','["abc", 34, True] holds a string, an integer and a boolean, so it mixes data types.'],
['Predict the output','What does this print?',N+`print(nums[1])`,['10','20','30','40'],1,'Counting starts at 0, not 1.','Index 0 is 10, so index 1 is the second item: 20.'],
['Predict the output','What does this print?',N+`print(nums[-2])`,['20','30','40','50'],2,'-1 is the last item. What comes just before it?','-1 is 50 and -2 is 40, counting from the right.'],
['Predict the output','What does this print?',N+`print(nums[1:4])`,['[20, 30, 40, 50]','[20, 30, 40]','[10, 20, 30]','[10, 20, 30, 40]'],1,'Start at index 1 and stop BEFORE index 4.','Slice start is included and end is excluded: indexes 1, 2, 3 give [20, 30, 40].'],
['Predict the output','What does this print?',`colors = ["red", "green", "blue", "pink"]\nprint(colors[:2])`,[`['red', 'green', 'blue']`,`['red', 'green']`,`['blue', 'pink']`,`['green', 'blue']`],1,'No start value means start from the first item.','[:2] starts at the beginning and stops before index 2, giving the first two items.'],
['Predict the output','What does this print?',`colors = ["red", "green", "blue", "pink"]\nprint(colors[-2:])`,[`['red', 'green']`,`['green', 'blue']`,`['pink']`,`['blue', 'pink']`],3,'Start at the 2nd item from the end and go to the end.','[-2:] starts from the second item from the right and runs to the end of the list.'],
['Identify the error','nums has 5 items. What happens when this code runs?',N+`print(nums[5])`,['It prints 50','It prints None','IndexError: list index out of range','It prints [50]'],2,'What is the LAST valid index in a list with 5 items?','Valid indexes are 0 to 4 (or -1 to -5). Index 5 does not exist, so Python raises an IndexError.'],
['Predict the output','What does this print?',`fruits = ["apple", "banana", "cherry"]\nfruits[1] = "kiwi"\nprint(fruits)`,[`['apple', 'banana', 'kiwi']`,`['kiwi', 'banana', 'cherry']`,`['apple', 'kiwi', 'cherry']`,`['apple', 'kiwi', 'banana', 'cherry']`],2,'Index 1 is the SECOND item. It gets replaced, not added.','Lists are mutable. Assigning to fruits[1] replaces "banana" with "kiwi".'],
['Real-world scenario','A shop records marks of 3 students. How many items does this list have?',`marks = [80, 90, 80]\nprint(len(marks))`,['2','3','80','270'],1,'Lists allow duplicates. Each copy is still an item.','len() counts every item, including the duplicate 80, so the answer is 3.'],
['Predict the output','What does this print?',`nums = [1, 2, 3]\ntotal = 0\nfor n in nums:\n    total = total + n\nprint(total)`,['3','123','6','0'],2,'The loop adds each number to total, one at a time.','The loop runs three times: 0+1, then +2, then +3 = 6.'],
['Predict the output','What does this print?',P+`print("Sam" in players)`,['True','False','Sam','1'],0,'in asks: is this item inside the list?','"Sam" is in the list, so the in check gives True.'],
['Predict the output','What does this print?',P+`if "Zoe" not in players:\n    print("Welcome, Zoe!")\nelse:\n    print("Already joined")`,['Already joined','Welcome, Zoe!','Nothing is printed','An error'],1,'Is "Zoe" in the list? What does not in say then?','"Zoe" is not in players, so the not in condition is True and the welcome message prints.'],
['Find the correct code','Which line changes the 3rd item of the list scores to 100?',null,['scores(3) = 100','scores[3] = 100','scores[2] = 100','scores{2} = 100'],2,'Square brackets, and remember indexing starts at 0.','The 3rd item has index 2, and we use square brackets: scores[2] = 100.'],
['Predict the output','What does this print?',`fruits = ["apple", "banana"]\nfruits.append("kiwi")\nprint(fruits)`,[`['kiwi', 'apple', 'banana']`,`['apple', 'kiwi', 'banana']`,`['apple', 'banana', 'kiwi']`,`['apple', 'banana']`],2,'append() adds at the very end.','append() always adds the new item to the end of the list.'],
['Predict the output','What does this print?',`fruits = ["apple", "banana", "cherry"]\nfruits.insert(1, "orange")\nprint(fruits)`,[`['orange', 'apple', 'banana', 'cherry']`,`['apple', 'orange', 'banana', 'cherry']`,`['apple', 'banana', 'orange', 'cherry']`,`['apple', 'banana', 'cherry', 'orange']`],1,'insert(1, ...) places the new item AT index 1.','insert(index, item) puts the item at that index and shifts the others to the right.'],
['Predict the output','What does this print?',`list1 = ["a", "b"]\nlist2 = [1, 2, 3]\nlist1.extend(list2)\nprint(list1)`,[`['a', 'b']`,`[['a', 'b'], [1, 2, 3]]`,`['a', 'b', 1, 2, 3]`,`[1, 2, 3, 'a', 'b']`],2,'extend() adds every item of list2 to list1.','extend() joins the items of list2 onto list1. list1 + list2 gives the same joined result as a new list.'],
['Predict the output','What does this print?',`nums = [10, 20, 30, 40]\nnums.pop()\nnums.remove(10)\nprint(nums)`,['[20, 30]','[30, 40]','[20, 30, 40]','[10, 20]'],0,'pop() with no index removes the LAST item. remove(10) removes the value 10.','pop() removes 40, then remove(10) removes the value 10, leaving [20, 30].'],
['Concept','What does this print?',`fruits = ["apple", "banana"]\nfruits.clear()\nprint(fruits)`,['NameError','[]','[\'apple\', \'banana\']','None'],1,'clear() empties the list but the list itself still exists.','clear() empties the list, leaving []. In contrast, del fruits deletes the whole variable, so printing it afterwards gives a NameError.'],
['Find the correct code','Which choice shows two valid ways to copy the list thislist?',null,['mylist = thislist.copy()  and  mylist = list(thislist)','mylist = thislist.clone()  and  mylist = copy(thislist)','mylist = thislist.pop()  and  mylist = thislist.clear()','mylist = thislist.extend()  and  mylist = thislist.insert()'],0,'One is a list method, the other uses the list() function.','Both copy() and list() make a new copy of a list.'],
['Scenario','A program must store 1 million whole-number readings using as little memory as possible. Which fits best?',null,['A list mixing numbers, text and True/False','An array from the array module','A separate variable for each reading','A nested list'],1,'Same data type + contiguous memory = efficient.','Arrays hold one data type in contiguous memory, which makes them more memory-efficient than lists for large numeric data.'],
['Match the concept','Which library is the standard choice for advanced numerical computing and multi-dimensional arrays?',null,['NumPy (ndarray)','The len() function','The type() function','The clear() method'],0,'It starts with "Num" and "Py".','NumPy arrays (ndarray) offer far more functionality and speed for numerical work than the built-in array module.'],
['Find the correct code','After import array, which line creates an array of signed integers?',`import array`,[`array.array([1, 2, 3], 'i')`,`array('i', [1, 2, 3])`,`array.array('i', [1, 2, 3])`,`array.array('i', 1, 2, 3)`],2,'Type code first, then a list of values.','The pattern is array.array(typecode, iterable). Type code \'i\' means signed integers.'],
['Predict the output','What does this print?',`numbers = [5, 2, 9, 1]\nnumbers.sort(reverse=True)\nprint(numbers)`,['[1, 2, 5, 9]','[9, 5, 2, 1]','[5, 2, 9, 1]','[9, 2, 5, 1]'],1,'reverse=True means biggest to smallest.','sort() arranges ascending by default; reverse=True makes it descending: [9, 5, 2, 1].'],
['Real-world scenario','A coach wants the gap between the highest and lowest score. What does this print?',`scores = [5, 2, 9, 1, 7]\nprint(max(scores) - min(scores))`,['8','24','7','10'],0,'Find the biggest and the smallest first.','max is 9 and min is 1, so 9 - 1 = 8. (sum(scores) would be 24.)'],
['Predict the output','What does this print?',`c = [1, 2, 3, [10, 20, 30]]\nprint(c[3][2])`,['3','20','30','[10, 20, 30]'],2,'c[3] is the inner list. Then pick its index 2.','c[3] gives [10, 20, 30], and [2] picks the third item of that inner list: 30.']];
const OKM=['Excellent! You’re getting better at Python! 🎉','Correct! Another coding skill unlocked! 🚀','Brilliant work, Code Explorer!'],
BADM=['Not quite! Let’s understand this concept and try again.','Good attempt! Think about the concept once more.','Keep learning. Every mistake makes you a better coder!'],
LM=['Great start, Code Explorer!','You’re mastering lists. Keep going!','Fantastic progress. Almost a Python pro!','Excellent! Only one level to go!','Quest complete! You’re a Python legend!'];
const $=i=>document.getElementById(i),R=a=>a[Math.floor(Math.random()*a.length)];
function h(t,c,x){const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
let S,user=null,db=null,dl=null;
const LS={get(){try{return JSON.parse(localStorage.getItem('pq_results')||'[]')}catch(e){return[]}},add(r){try{const a=LS.get();a.push(r);localStorage.setItem('pq_results',JSON.stringify(a))}catch(e){}}};
function view(html){const a=$('app');a.innerHTML=html;scrollTo(0,0)}
const fmt=n=>Number.isInteger(n)?String(n):n.toFixed(1),ls=i=>Math.max(0,S.ok[i]-.5*S.hints[i]),sum=a=>a.reduce((x,y)=>x+y,0),tot=()=>Math.max(0,sum(S.ok)-.5*sum(S.hints));
function upd(){const e=$('sc');if(e)e.textContent='Score: '+fmt(tot())}
function ach(p){return p>=90?'Python Master 🚀':p>=75?'Coding Champion 🏆':p>=50?'List Explorer 🔍':'Python Beginner 🌱'}
function burst(){for(let i=0;i<26;i++){const s=h('span','fall',R(['🎉','⭐','✨','🚀','💜']));s.style.left=Math.random()*100+'vw';s.style.animationDelay=Math.random()*.8+'s';document.body.appendChild(s);setTimeout(()=>s.remove(),3600)}}
function welcome(){
 $('hs').textContent='';
 view(`<div class="card hero"><div class="lg"><img src="logo-white.png" alt="Cozmek logo"><b>Cozmek</b></div>
 <h1>Python Power-Up</h1><div class="tag">Learn It. Build It. Master It! 🚀</div>
 <p>Welcome, Code Explorer! Learn Python, power up your coding skills! 🚀</p><div class="rules"><b>How scoring works</b><br>+1 point for each correct answer · Each hint costs −0.5 points (once per question, deducted when you tap Hint) · Maximum score: 30</div>
 <input type="text" id="nm" maxlength="40" placeholder="Enter your name" aria-label="Your name"><br><button class="btn" id="go" disabled>Start Your Quest 🎮</button></div>
 <div class="foot"><a id="td" hidden>Teacher dashboard</a></div>`);
 const nm=$('nm'),go=$('go');nm.oninput=()=>go.disabled=!nm.value.trim();
 nm.onkeydown=e=>{if(e.key==='Enter'&&nm.value.trim())start(nm.value.trim())};go.onclick=()=>start(nm.value.trim());
 $('td').onclick=dash;tlink()}
function tlink(){const a=$('td');if(a)a.hidden=!(!user||user.canEdit())}
function start(n){S={name:n,l:0,q:0,lock:false,hint:false,sc:0,ok:[0,0,0,0,0],hints:[0,0,0,0,0]};intro()}
function steps(){return '<div class="steps">'+LV.map((l,i)=>`<div class="${i<S.l?'done':i===S.l?'on':''}">${i<S.l?'✅':i>S.l?'🔒':l.i} L${i+1}</div>`).join('')+'</div>'}
function intro(){const L=LV[S.l];$('hs').textContent=S.name;
 view(`${steps()}<div class="card"><div class="big float">${L.i}</div><h2>Level ${S.l+1}: ${L.n}</h2><p><b>Quick learn</b> before you play:</p><ul class="intro">${L.t.map(x=>`<li>${x}</li>`).join('')}</ul><button class="btn" id="b">Let’s go! 🎯</button></div>`);
 $('b').onclick=()=>{S.q=0;ques()}}
function ques(){
 const i=S.l*6+S.q,q=Q[i];S.lock=false;S.hint=false;
 view(`${steps()}<div class="card"><div class="meta"><span>Level ${S.l+1}: ${LV[S.l].n}</span><span>Question ${S.q+1} of 6</span><span id="sc"></span></div>
 <div class="bar"><i style="width:${(i/30)*100}%"></i></div><span class="kind">${q[0]}</span><div class="qt" id="qt"></div><div id="cd"></div><div id="op"></div>
 <div class="row"><button class="ghost" id="hb">Hint 💡</button><button class="btn" id="nx" disabled>${S.q===5?'Finish Level':'Next'} ➜</button></div><div id="hn" style="color:var(--mut);font-size:13px;margin-top:8px">Need a little help? Using a hint will deduct 0.5 points from your score.</div><div id="hx"></div><div id="fb"></div></div>`);
 $('qt').textContent=q[1];
 if(q[2]){const p=h('pre',null,q[2]);$('cd').appendChild(p)}
 q[3].forEach((o,k)=>{const b=h('button','opt'+(q[0].match(/code|output|error/i)||/[\[\]()=]/.test(o)?' m':''),o);b.onclick=()=>pick(k);$('op').appendChild(b)});
 upd();$('hb').onclick=()=>{if(S.lock||S.hint)return;S.hint=true;S.hints[S.l]++;$('hb').disabled=true;$('hn').textContent='Hint used: −0.5 points';$('hx').appendChild(h('div','hint','💡 '+q[5]));upd()};
 $('nx').onclick=()=>{S.q===5?lvDone():(S.q++,ques())}}
function pick(k){
 if(S.lock)return;S.lock=true;const q=Q[S.l*6+S.q],bs=[...document.querySelectorAll('.opt')],good=k===q[4];
 bs.forEach(b=>b.disabled=true);bs[k].classList.add(good?'ok':'bad');if(!good)bs[q[4]].classList.add('ok');
 if(good)S.ok[S.l]++;upd();if(!S.hint)$('hn').style.display='none';
 const f=h('div','fb '+(good?'ok':'bad'));const a=h('b',null,(good?'✅ ':'❌ ')+R(good?OKM:BADM));f.appendChild(a);
 if(!good){f.appendChild(h('div',null,'Correct answer: '+q[3][q[4]]))}
 f.appendChild(h('div',null,q[6]));$('fb').appendChild(f);$('nx').disabled=false;$('hb').disabled=true;$('nx').focus()}
function lvDone(){
 const c=S.ok[S.l];burst();const last=S.l===4;
 view(`${steps()}<div class="card c"><div class="big">🎉</div><h2>Level ${S.l+1} Complete!</h2><div class="big">${fmt(ls(S.l))} / 6</div><p style="color:var(--mut)">${c} correct · ${S.hints[S.l]} hint(s) used (−${fmt(S.hints[S.l]*.5)})</p><p>${LM[S.l]}</p><div class="bar"><i style="width:${ls(S.l)/6*100}%"></i></div>
 <button class="btn" id="b">${last?'See My Results 🏆':'Unlock Next Level 🔓'}</button></div>`);
 $('b').onclick=()=>{if(last)fin();else{S.l++;intro()}}}
function fin(){
 const c=sum(S.ok),H=sum(S.hints),pen=H*.5,fs=Math.max(0,c-pen),p=Math.round(fs/30*100),lv=[0,1,2,3,4].map(ls),rec={id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),name:S.name,ts:new Date().toISOString(),correct:c,wrong:30-c,hints:H,penalty:pen,score:fs,pct:p,status:ach(p),lv};
 LS.add(rec);if(db)db.collection('results').doc(rec.id).set(rec).catch(()=>{});burst();
 view(`<div class="card c"><div style="display:flex;align-items:center;justify-content:center;gap:10px"><img class="li" src="logo.png" alt="Cozmek logo" style="height:56px;width:auto"><b style="font-size:24px;color:var(--pri)">Cozmek</b></div>
 <h2>Quest Complete, ${esc(S.name)}!</h2><div class="big">${ach(p)}</div><p>Final percentage: <b>${p}%</b>. ${p>=90?'Outstanding mastery of lists and arrays!':p>=75?'Great work, you’re a real champion!':p>=50?'Good progress. Review the tricky parts and try again!':'A great start. Practise a little more and replay the quest!'}</p>
 <div class="grid"><div><b>30</b>Total questions</div><div><b style="color:var(--ok)">${c}</b>Correct</div><div><b style="color:var(--bad)">${30-c}</b>Incorrect</div><div><b>${H}</b>Hints used</div><div><b style="color:var(--bad)">−${fmt(pen)}</b>Hint penalty</div><div><b>${fmt(fs)} / 30</b>Final score</div></div>
 <p style="color:var(--mut);font-size:14px">Final score = ${c} correct − (${H} hints × 0.5) = ${fmt(fs)}</p>
 <div style="text-align:left">${LV.map((l,i)=>`<div class="lvl"><span style="width:210px">${l.i} L${i+1} ${l.n}</span><div class="bar"><i style="width:${lv[i]/6*100}%"></i></div><b>${fmt(lv[i])}/6</b></div>`).join('')}</div>
 <p style="color:var(--mut);font-size:13px">Level scores include hint deductions.</p><button class="btn" id="b">Play Again 🔁</button></div>`);
 $('b').onclick=welcome}
function esc(s){return s.replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]))}
async function dash(){
 view('<div class="card"><h2>Teacher Dashboard</h2><p id="ld">Loading results…</p></div>');
 let all=LS.get(),t=setTimeout(()=>{},0);
 if(db){try{const s=await db.collection('results').get();s.docs.forEach(d=>all.push(typeof d.data==='function'?d.data():d.data))}catch(e){}}
 const m={};all.forEach(r=>{if(r&&r.id)m[r.id]=r});all=Object.values(m).sort((a,b)=>b.ts.localeCompare(a.ts));
 view(`<div class="card"><h2>Teacher Dashboard</h2><p>${all.length} student result(s) · stored persistently</p><div class="row" style="margin:0 0 12px"><button class="btn" id="ex">Export CSV ⬇</button><button class="ghost" id="bk">Back</button></div>
 <div class="tw"><table><tr><th>Student</th><th>Completed</th><th>Score</th><th>%</th><th>✔</th><th>✘</th><th>Hints</th><th>Penalty</th><th>L1–L5</th><th>Status</th></tr>${all.map(r=>`<tr><td>${esc(r.name)}</td><td>${new Date(r.ts).toLocaleString()}</td><td>${fmt(+r.score)}/30</td><td>${r.pct}%</td><td>${r.correct}</td><td>${r.wrong}</td><td>${r.hints||0}</td><td>−${fmt(+(r.penalty||0))}</td><td>${r.lv.map(fmt).join(' / ')}</td><td>${esc(r.status)}</td></tr>`).join('')||'<tr><td colspan="10">No results yet.</td></tr>'}</table></div></div>`);
 $('bk').onclick=welcome;
 $('ex').onclick=async()=>{const q=v=>'"'+String(v).replace(/"/g,'""')+'"';
  const csv=['Student,Completed,Final Score (max 30),Percentage,Correct,Incorrect,Hints Used,Hint Penalty,L1,L2,L3,L4,L5,Status',...all.map(r=>[r.name,r.ts,r.score,r.pct,r.correct,r.wrong,r.hints||0,r.penalty||0,...r.lv,r.status].map(q).join(','))].join('\n');
  try{if(dl)await dl.save({filename:'python-quest-results.csv',data:csv});else throw 0}catch(e){if(e&&e.code==='declined')return;const a=h('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='python-quest-results.csv';a.click()}}}
welcome();
(async()=>{try{if(window.claude){user=await claude.use('user');db=await claude.use('db');dl=await claude.use('downloads');tlink()}}catch(e){}})();
