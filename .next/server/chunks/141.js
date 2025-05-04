exports.id=141,exports.ids=[141],exports.modules={7061:(e,t,s)=>{Promise.resolve().then(s.bind(s,20967)),Promise.resolve().then(s.t.bind(s,28328,23))},20967:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var r=s(45781),o=s(54563),n=s(64614),i=s(34554),a=s(28328),c=s.n(a),l=s(7439),d=s(42366);let m=[{name:"Home",href:"/dashboard",icon:o.A},{name:"Invoices",href:"/dashboard/invoices",icon:n.A},{name:"Customers",href:"/dashboard/customers",icon:i.A}];function u(){let e=(0,l.usePathname)();return(0,r.jsx)(r.Fragment,{children:m.map(t=>{let s=t.icon;return(0,r.jsxs)(c(),{href:t.href,className:(0,d.A)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":e===t.href}),children:[(0,r.jsx)(s,{className:"w-6"}),(0,r.jsx)("p",{className:"hidden md:block",children:t.name})]},t.name)})})}},25800:(e,t,s)=>{"use strict";s.d(t,{Jv:()=>d,CI:()=>m});var r=s(66596),o=s(62921),n=s(30365),i=s(91141);let a=(0,s(24906).A)(process.env.POSTGRES_URL,{ssl:"require"});async function c(e){try{return(await a`SELECT * FROM users WHERE email=${e}`)[0]}catch(e){throw console.error("Failed to fetch user:",e),Error("Failed to fetch user.")}}let{auth:l,signIn:d,signOut:m}=(0,r.Ay)({pages:{signIn:"/login"},callbacks:{authorized({auth:e,request:{nextUrl:t}}){let s=!!e?.user;return t.pathname.startsWith("/dashboard")?!!s:!s||Response.redirect(new URL("/dashboard",t))}},providers:[],providers:[(0,o.A)({async authorize(e){let t=n.z.object({email:n.z.string().email(),password:n.z.string().min(6)}).safeParse(e);if(t.success){let{email:e,password:s}=t.data,r=await c(e);if(!r)return null;if(await i.Ay.compare(s,r.password))return r}return console.log("Invalid credentials"),null}})]})},30745:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,85770,23)),Promise.resolve().then(s.t.bind(s,88204,23)),Promise.resolve().then(s.t.bind(s,82576,23)),Promise.resolve().then(s.t.bind(s,59507,23)),Promise.resolve().then(s.t.bind(s,61283,23)),Promise.resolve().then(s.t.bind(s,75147,23)),Promise.resolve().then(s.t.bind(s,83163,23)),Promise.resolve().then(s.t.bind(s,99773,23))},30869:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(95479),o=s(80122);function n({children:e}){return(0,r.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[(0,r.jsx)("div",{className:"w-full flex-none md:w-64",children:(0,r.jsx)(o.A,{})}),(0,r.jsx)("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12",children:e})]})}},46793:(e,t,s)=>{"use strict";s.d(t,{default:()=>r});let r=(0,s(51129).registerClientReference)(function(){throw Error("Attempted to call the default export of \"F:\\\\Projects\\\\ByName\\\\nextjs-testo\\\\app\\\\ui\\\\dashboard\\\\nav-links.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"F:\\Projects\\ByName\\nextjs-testo\\app\\ui\\dashboard\\nav-links.tsx","default")},47132:(e,t,s)=>{"use strict";s.d(t,{MX:()=>l,Pt:()=>d,Q5:()=>a,Yu:()=>m,gn:()=>u,nr:()=>i,rv:()=>h,zP:()=>c});var r=s(24906),o=s(48003);let n=(0,r.A)(process.env.POSTGRES_URL,{ssl:"require"});async function i(){try{console.log("Fetching revenue data..."),await new Promise(e=>setTimeout(e,4e3));let e=await n`SELECT * FROM revenue`;return console.log("Data fetch completed after 3 seconds."),e}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch revenue data.")}}async function a(){try{return(await n`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`).map(e=>({...e,amount:(0,o.vv)(e.amount)}))}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch the latest invoices.")}}async function c(){try{let e=n`SELECT COUNT(*) FROM invoices`,t=n`SELECT COUNT(*) FROM customers`,s=n`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,r=await Promise.all([e,t,s]),i=Number(r[0][0].count??"0"),a=Number(r[1][0].count??"0"),c=(0,o.vv)(r[2][0].paid??"0"),l=(0,o.vv)(r[2][0].pending??"0");return{numberOfCustomers:a,numberOfInvoices:i,totalPaidInvoices:c,totalPendingInvoices:l}}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch card data.")}}async function l(e,t){try{return await n`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${e}%`} OR
        customers.email ILIKE ${`%${e}%`} OR
        invoices.amount::text ILIKE ${`%${e}%`} OR
        invoices.date::text ILIKE ${`%${e}%`} OR
        invoices.status ILIKE ${`%${e}%`}
      ORDER BY invoices.date DESC
      LIMIT ${6} OFFSET ${(t-1)*6}
    `}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoices.")}}async function d(e){try{let t=await n`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${e}%`} OR
      customers.email ILIKE ${`%${e}%`} OR
      invoices.amount::text ILIKE ${`%${e}%`} OR
      invoices.date::text ILIKE ${`%${e}%`} OR
      invoices.status ILIKE ${`%${e}%`}
  `;return Math.ceil(Number(t[0].count)/6)}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch total number of invoices.")}}async function m(e){try{return(await n`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${e};
    `).map(e=>({...e,amount:e.amount/100}))[0]}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoice.")}}async function u(){try{return await n`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch all customers.")}}async function h(e){try{return(await n`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${e}%`} OR
        customers.email ILIKE ${`%${e}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `).map(e=>({...e,total_pending:(0,o.vv)(e.total_pending),total_paid:(0,o.vv)(e.total_paid)}))}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch customer table.")}}},48003:(e,t,s)=>{"use strict";s.d(t,{YL:()=>n,c6:()=>o,vv:()=>r});let r=e=>(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),o=(e,t="en-US")=>{let s=new Date(e);return new Intl.DateTimeFormat(t,{day:"numeric",month:"short",year:"numeric"}).format(s)},n=e=>{let t=[],s=1e3*Math.ceil(Math.max(...e.map(e=>e.revenue))/1e3);for(let e=s;e>=0;e-=1e3)t.push(`$${e/1e3}K`);return{yAxisLabels:t,topLabel:s}}},48853:(e,t,s)=>{Promise.resolve().then(s.bind(s,46793)),Promise.resolve().then(s.t.bind(s,87846,23))},49292:()=>{},54286:()=>{},59650:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(95479);s(54286);var o=s(49247),n=s.n(o);function i({children:e}){return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:`${n().className} antialiased`,children:e})})}},62444:()=>{},67193:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,60140,23)),Promise.resolve().then(s.t.bind(s,18946,23)),Promise.resolve().then(s.t.bind(s,74178,23)),Promise.resolve().then(s.t.bind(s,6229,23)),Promise.resolve().then(s.t.bind(s,31281,23)),Promise.resolve().then(s.t.bind(s,93833,23)),Promise.resolve().then(s.t.bind(s,97857,23)),Promise.resolve().then(s.t.bind(s,4947,23))},69277:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(95479),o=s(41122),n=s(39196),i=s.n(n);function a(){return(0,r.jsxs)("div",{className:`${i().className} flex flex-row items-center leading-none text-white`,children:[(0,r.jsx)(o.A,{className:"h-12 w-12 rotate-[15deg]"}),(0,r.jsx)("p",{className:"text-[44px]",children:"Acme"})]})}},80122:(e,t,s)=>{"use strict";s.d(t,{A:()=>u,x:()=>m});var r=s(95479),o=s(51572);s(23680);var n=s(87846),i=s.n(n),a=s(46793),c=s(69277),l=s(75047),d=s(25800);let m=async function(){await (0,d.CI)({redirectTo:"/"})};function u(){return(0,r.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[(0,r.jsx)(i(),{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/",children:(0,r.jsx)("div",{className:"w-32 text-white md:w-40",children:(0,r.jsx)(c.A,{})})}),(0,r.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[(0,r.jsx)(a.default,{}),(0,r.jsx)("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-50 md:block"}),(0,r.jsx)("form",{action:(0,o.A)(m,"00f5ce6ce703ddbba589e075fdd2bb6b73764dbe92",null),children:(0,r.jsxs)("button",{className:"flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",children:[(0,r.jsx)(l.A,{className:"w-6"}),(0,r.jsx)("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}}};