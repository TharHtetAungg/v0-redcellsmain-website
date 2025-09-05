import { remark } from "remark"
import html from "remark-html"

export interface Post {
  title: string
  slug: string
  meta: string
  image: string
  author: {
    name: string
    url: string
  }
  datePublished: string
  dateModified: string
  content: string
}

// In a real app, this data would come from MDX files.
const postsData: Omit<Post, "content"> & { rawContent: string }[] = [
  {
    title: "10 Red Flags Your Supplier Is a Clone",
    slug: "clone-supplier-red-flags",
    meta: "A checklist of domain, document, and behavioral anomalies that signal advance-fee fraud.",
    image: "/blog/clone-supplier.jpg",
    author: {
      name: "RedCell Analyst Team",
      url: "https://redcell-advisory.com",
    },
    datePublished: "2025-07-10T09:00:00Z",
    dateModified: "2025-07-10T09:00:00Z",
    rawContent: `
New clients often ask us the same question: “This website looks professional, but something feels off. How can I tell if it’s just a recycled shell?” After analyzing thousands of fraud cases, we’ve distilled the patterns into ten critical clues. These red flags cover digital footprints, documentation, and communication styles. If you spot three or more of these in a potential supplier, you are likely about to wire money into a black hole.

### 1. Domain Age & Privacy Shield
A legitimate business with years of history shouldn't have a website registered last month. Use a WHOIS lookup tool to check the domain creation date. A recent registration is a major red flag. Furthermore, if the owner's details are hidden behind a "privacy protect" service, ask yourself why a transparent business would need to hide its identity.

### 2. Generic Stock Photography
Fraudsters are lazy. They rarely use original photos of their products, facilities, or team. Use a reverse image search (like Google Images or TinEye) on their product photos. If the same images appear on dozens of other unrelated sites, Alibaba listings, or stock photo websites, you're not dealing with a genuine manufacturer.

### 3. Language & Location Mismatch
A company claiming to be a major exporter from, for example, Vietnam should have a Vietnamese version of its website. If the site is only in English and targets international buyers exclusively, it suggests they have no local presence or legitimacy.

### 4. Inconsistent Contact Details
This is a classic. The company is registered in the UK or Germany, but the only contact is a free email address (like Gmail or Hotmail) and a Chinese mobile number. Legitimate businesses use corporate email addresses (\`@companyname.com\`) and have registered landlines.

### 5. The Phantom Logistics Partner
Scammers often invent fake shipping companies to provide fraudulent tracking numbers. They'll list a "logistics partner" on their site. Google this partner. Do they have a real, independent web presence? Are they a registered company? If they only exist on the supplier's website, they are part of the scam.

### 6. Unprofessional Documentation
Look for low-resolution logos, mismatched fonts, and spelling errors on proforma invoices and contracts. Legitimate companies have professional document templates. Scammers often piece them together from various sources, resulting in an amateurish final product.

### 7. High-Pressure Sales Tactics
"You must pay the 50% deposit within 24 hours or the price will go up." This artificial urgency is designed to make you panic and skip your due diligence. A real business partner will understand the need for verification and will not pressure you into a hasty decision.

### 8. Vague Corporate Information
A real company has a physical address, a registration number, and a history. If the supplier's website lacks a specific street address or provides only a P.O. box, be wary. Verify any provided registration number with the official corporate registry of that country.

### 9. Refusal of a Video Call
In today's world, a refusal to conduct a video call is a massive red flag. A legitimate factory manager or sales director should be happy to have a video call to show you their facility and products. A scammer has nothing to show you.

### 10. Perfect English, Wrong Jargon
Sometimes, the English in their emails is too perfect, using idioms and phrasing that a non-native speaker in their industry is unlikely to use. Conversely, they might use incorrect industry-specific terminology. This can indicate that the person you're communicating with is not who they claim to be.

---

If these flags look familiar, it's time to pause. A small investment in a **Tactical Probe** can verify these details and save you from a catastrophic loss.
    `,
  },
  {
    title: "Step-by-Step: Verifying a BL Number in 3 Minutes",
    slug: "verify-bl-number-fast",
    meta: "A hands-on guide to stop fake Bill of Lading documents before they hit your inbox.",
    image: "/blog/verify-bl.jpg",
    author: {
      name: "RedCell Analyst Team",
      url: "https://redcell-advisory.com",
    },
    datePublished: "2025-07-08T11:00:00Z",
    dateModified: "2025-07-09T14:20:00Z",
    rawContent: `
A forged Bill of Lading (BL) is the fraudster's favorite tool. It's the key document that makes a non-existent shipment look legitimate, tricking you into releasing final payment. But verifying a BL is easier than you think. Here’s a 180-second routine our analysts use to spot fakes using only free, open-source tools.

### Step 1: Decode the Carrier Prefix (SCAC Code)
The first 4 letters of a BL number are typically the carrier's unique identifier, known as the Standard Carrier Alpha Code (SCAC). For example, \`MAEU\` belongs to Maersk, \`COSU\` to COSCO, and \`EGLV\` to Evergreen. A quick search for "SCAC code list" will give you tools to identify the carrier. If the prefix doesn't match a known carrier, the BL is likely fake.

### Step 2: Use the Carrier's Official Tracking Portal
**Never** use a tracking link provided by the supplier. They can lead to fake websites designed to mirror real ones. Once you've identified the carrier from the SCAC code, go to their official website yourself and find their cargo tracking page. Enter the BL number there directly. If the official site shows "No record found," the BL is fraudulent.

### Step 3: Cross-Check Container and Vessel Data
If the tracking number works, don't stop there. Scrutinize the details.
- **Container Number:** Does it follow the standard format (4 letters, 7 numbers)? You can use an online "container number check digit calculator" to ensure the last number is mathematically correct.
- **Vessel Name:** The tracking details will list a vessel name. Is this a real ship? Use a site like MarineTraffic or VesselFinder to look up the ship. Does it exist? Is its current location or recent port history consistent with the BL?

### Step 4: Verify Port Timings and "Shipped on Board" Date
The BL will have a "Shipped on Board" date. The carrier's tracking data and vessel tracking sites will show the ship's actual port call history. Did the vessel actually dock at the port of loading on or before the date listed on the BL? If the ship was in another part of the world on that date, you've found a forgery.

### Step 5: Document Everything for Evidence
If you find any discrepancies, take time-stamped screenshots of the official carrier website and the vessel tracking data. Use a tool to calculate the SHA-256 hash of these screenshot files. This creates a digital fingerprint, providing robust, verifiable evidence that you can use when reporting the fraud to your bank to initiate a SWIFT recall or file a dispute.

---

This three-minute check is a powerful layer of defense. If you find any inconsistencies, do not send any more money. Contact us immediately to initiate a **Deep Probe** and explore options for fund recovery.
    `,
  },
  {
    title: "Advance-Fee Fraud 2025: New Geographies, Same Playbook",
    slug: "aff-2025-regional-shift",
    meta: "Why Latin-American shells are replacing Hong Kong in global commodity scams.",
    image: "/blog/latam-shift.jpg",
    author: {
      name: "RedCell Analyst Team",
      url: "https://redcell-advisory.com",
    },
    datePublished: "2025-07-05T15:30:00Z",
    dateModified: "2025-07-06T10:00:00Z",
    rawContent: `
Our internal heat-map shows a startling trend: a 42% jump in shell companies registered in Panama and Paraguay targeting fertiliser, rice, and sugar trades. For years, Hong Kong and the BVI were the epicenters of commodity fraud. Now, the playbook remains the same, but the stage is shifting west. This isn't a random migration; it's a calculated move by fraud networks exploiting specific regional vulnerabilities. Let's unpack why this is happening and what it means for importers.

### The "Why": Regulatory Arbitrage and De-Risking
Two major forces are driving this shift. First, increased regulatory scrutiny in traditional hubs like Hong Kong and Singapore is making it harder for fraudsters to operate anonymously. As these jurisdictions tighten KYC (Know Your Customer) and AML (Anti-Money Laundering) laws, criminals seek paths of less resistance. Latin America, with its fragmented regulatory landscape, offers fertile ground.

Second, as global banks "de-risk" by exiting relationships with clients in high-risk sectors or regions in Asia, fraudsters find it easier to open correspondent accounts through less stringent Latin American financial institutions. They exploit these newer, less-monitored channels to receive and launder funds.

### The "How": One-Pager Spanish Clones
The new face of this fraud is the "one-pager" clone site. These are quickly assembled websites, often in Spanish with clumsy English translations, promoting a single commodity. They use generic templates, stock photos, and fake addresses. Their sole purpose is to look just legitimate enough to secure an advance payment before disappearing. They are cheap to produce and easy to replicate, allowing a single fraud network to operate dozens of fake exporter sites simultaneously.

### Your Defense: A 1-Page DD Checklist
How can importers protect themselves? It starts with enhanced due diligence tailored to this new threat.
- **Verify Locally:** Don't just check a national registry. Engage a local agent or law firm to verify the business address and operational status. Is it a real office or just a mail drop?
- **Bank Scrutiny:** Scrutinize the beneficiary bank. Is it a major national bank or a small, obscure financial institution? A payment destined for a small, regional bank in Panama from a company claiming to be a major Brazilian exporter is a huge red flag.
- **Digital Cross-Verification:** Use the tools from our other guides. Check the domain age, look for cloned websites on the same IP, and demand a video call to see the actual product and facility.
- **Language Test:** If they claim to be a Brazilian exporter, engage with them in Portuguese. A genuine company will have native speakers on staff.

The geography may change, but the fundamentals of fraud do not. Vigilance and proactive verification remain your strongest shields.
    `,
  },
  {
    title: "SWIFT Recall: 5 Things Banks Won't Tell You",
    slug: "swift-recall-tips",
    meta: "Practical tips to increase the success rate of MT103 recalls after a fraudulent transfer.",
    image: "/blog/swift-recall.jpg",
    author: {
      name: "RedCell Analyst Team",
      url: "https://redcell-advisory.com",
    },
    datePublished: "2025-07-02T18:00:00Z",
    dateModified: "2025-07-03T11:45:00Z",
    rawContent: `
You've wired the funds, and a sinking feeling tells you you've been scammed. A SWIFT recall is not a magic undo button, but it can claw back your money if you act with speed and precision, typically within the first 24-48 hours. Banks have a process, but they won't always tell you how to make it work in your favor. Here’s the insider playbook we give our Full Recovery clients.

### 1. Use the Right Code: It's Fraud, Not an Error
When you ask your bank to initiate the recall (an MT103 message), they may ask for a reason. Do not let them mark it as a generic "technical error" or "customer request." Insist they use the specific SWIFT reason code for fraud. This triggers a completely different, higher-priority protocol at the receiving bank, compelling their compliance department to investigate immediately rather than just processing a simple reversal request.

### 2. Go Parallel: Call the AML Team Directly
A SWIFT message is just a message. It can sit in a queue. While your bank sends the official request, you or your representative should be on the phone directly with the beneficiary bank's Anti-Money Laundering (AML) or Fraud Prevention department. This gets human eyes on the transaction immediately. You are creating a second, more urgent channel of communication that can lead to a faster freeze on vaccinate.

### 3. Attach a Preliminary Police Report
You might think you need a fully filed police report, which can take days. You don't. The moment you file a complaint with law enforcement (even online), you get a reference or case number. Attach a PDF of your complaint summary, including this number, to your email to the bank. This shows them you are treating this as a criminal matter, which increases their legal imperative to act swiftly to prevent further criminal activity.

### 4. Follow Up with a Clear Schedule
Don't just send the request and wait. Have a structured follow-up plan. Here is a simple template:
- **Hour 1:** Phone call to your bank relationship manager to initiate recall. Send follow-up email summarizing the call.
- **Hour 2:** Call the beneficiary bank's fraud department.
- **Day 1 (End of Day):** Email both banks requesting a status update, referencing your police report number.
- **Day 2 (Morning):** Phone call for a verbal update.
- **Day 3 onwards:** Daily email check-in.
This persistence ensures your case stays at the top of the pile.

### 5. Provide a "Fraud Dossier"
Make it easy for the bank's fraud analyst to understand your case. Compile a single, well-organized PDF containing:
- A one-page summary of the fraud.
- Copies of the fraudulent invoices.
- The complete email chain with the scammer.
- Screenshots of the fake website and your BL verification checks.
- The SWIFT confirmation of your original payment.
A clear, concise dossier allows the bank to approve the freeze and recall with minimal internal delay.
    `,
  },
  {
    title: "Toolbox: Using DNSlytics to Spot a Shell Network",
    slug: "dnslytics-shell-network",
    meta: "A quick tutorial on pivoting across domains by IP, Google AdSense ID, and SSL serials.",
    image: "/blog/dns-analytics.jpg",
    author: {
      name: "RedCell Analyst Team",
      url: "https://redcell-advisory.com",
    },
    datePublished: "2025-06-28T10:00:00Z",
    dateModified: "2025-06-29T12:00:00Z",
    rawContent: `
Professional fraudsters don't build just one fake website; they build dozens. They are farms, not single-family homes. And because they value speed and low cost, they often make a critical mistake: they host their entire network of cloned sites on the same cheap, shared server. This creates a digital thread that can unravel their whole operation. Tools like DNSlytics let you pull that thread. Here's how.

### Step 1: The Initial Domain Lookup
Start with the single domain you're investigating (e.g., \`example-trader.com\`). Go to a reverse analytics tool like DNSlytics and enter the domain name. The initial report will give you basic registration and IP information. But the real intelligence is in the "Reverse" tools.

### Step 2: Pivot on "Hosting Neighbours"
In the report, find the section for "Reverse IP" or "Hosting Neighbours." This will show you every other website hosted on the same IP address. A legitimate company will typically have its own server or be hosted alongside a random assortment of unrelated small businesses. A fraud network, however, will reveal a list of other domains with suspiciously similar names:
- \`example-trader.com\` (your target)
- \`example-logistics-shipping.com\`
- \`global-example-trade.net\`
- \`exampel-trader.com\` (note the typo)

This is the "Aha!" moment. You've just uncovered the fraud farm.

### Step 3: Pivot on Analytics and AdSense IDs
Fraudsters often reuse the same Google Analytics or AdSense tracking ID across all their sites. In the DNSlytics report, look for "Reverse Google AdSense" or "Reverse Google Analytics." Clicking on the ID (e.g., \`pub-123456789\`) will show you every other domain in their database that has ever used that same tracking code. This can uncover more sites in their network, even if they've moved them to different servers.

### Step 4: Pivot on SSL Certificate Serials
Similarly, lazy fraudsters might use the same SSL certificate for multiple domains. The "Reverse SSL" tool can pivot on the certificate's serial number or subject information to find other connected domains.

### Case Example: Unmasking a Network in 40 Seconds
We recently investigated a site called \`fecomltd.com\`. A simple Reverse IP lookup revealed six other domains on the same server, all registered within the same week, all using the same website template, and all targeting the same commodity. What started as a check on one company became the discovery of an entire fraudulent network, allowing us to warn other clients who were in contact with the sibling sites. This entire process, from initial lookup to network discovery, took less than a minute.
    `,
  },
  {
    title: "Making Foreign Police Move: A Field Manual for Fraud Victims",
    slug: "activate-foreign-law-enforcement",
    meta: "A practical playbook for pushing authorities in another country to act on your fraud case despite red tape and local apathy.",
    image: "/blog/foreign-police.jpg",
    author: {
      name: "RedCell Analyst Team",
      url: "https://redcell-advisory.com",
    },
    datePublished: "2025-06-25T14:00:00Z",
    dateModified: "2025-06-26T09:30:00Z",
    rawContent: `
The harshest truth in cross-border fraud recovery is this: overseas police departments are not waiting for your email. They don’t jump when a foreigner reports an online loss. Most economic crime units are buried in domestic cases, and a junior officer has zero incentive to take on a complex international file unless a superior explicitly says, “Do it.” So, how do we regularly convert these cold desks into active investigations?

It’s not about shouting louder; it’s about strategic packaging. We make the case so compelling, so easy to action, and so aligned with their own internal incentives that *inaction* becomes the riskier choice for them. It’s about turning your problem into their solution. This is the distilled method our intelligence team uses to transform a bureaucratic shrug into an official case number and, ultimately, action.

### 🔺 1. Identify the Right Gatekeeper
Your first email is the most critical. Sending it to a generic address like \`info@police.gov.th\` is the equivalent of throwing it in the bin. You must target the specific unit and, ideally, a specific person.
- **Find the Unit:** Search for the country's specialized **Economic Crime Division (ECD)**, **Cyber Crime Investigation Bureau (CCIB)**, or equivalent. In Thailand, it's the TCSD; in India, the CID-Fraud Unit.
- **Find a Name:** Use LinkedIn and official government directories to find the name and rank of an Inspector, Superintendent, or Division Commander. An email addressed to a specific person is infinitely more likely to be read than one sent to a general inbox.

### 🔺 2. Lead with Local Victim Impact
They don't care about your company's loss. They care about crimes happening in *their* country. Frame your report around the local impact.
- **Localize the Crime:** Instead of "We were defrauded," write "A fraudulent entity operating from your jurisdiction has committed a crime." Highlight the local angle: tax leakage from an unregistered business, reputational harm to their country's export sector, or a clear violation of their anti-money laundering (AML) laws.
- **Translate Key Information:** Provide a one-page summary in their local language. Google Translate is a starting point, but use a native speaker to polish the greetings, official titles, and key phrases. This small sign of respect can make a huge difference.

### 🔺 3. Provide a Pre-Built Case File
Make it impossible for them to say "we need more information." Your goal is to give them a file so complete and well-organized that they can forward it up the chain of command without any extra work.
- **The Bundle:** Attach a **single, bookmarked PDF**. This bundle should include a notarized affidavit of facts, a clear timeline of events, the SWIFT MT103 payment confirmation, domain WHOIS records, and a map of the shell companies involved.
- **Courtroom Ready:** Number every page and include an appendix list. The more professional and "official" it looks, the more seriously it will be taken.

### 🔺 4. Trigger Their Compliance Clock
Police departments operate on internal metrics and compliance pressures. You can use this to your advantage.
- **Copy the Bank's AML Unit:** When you email the police, CC the compliance/AML department of the beneficiary bank. Once a regulated financial institution is officially aware of the police report, the police are under greater pressure to log the case and provide a reference number.
- **Use AML Keywords:** Explicitly use terms like **"suspicious transaction," "proceeds of crime,"** and reference specific local laws if you know them (e.g., "a potential violation of Section 248 of the penal code"). This signals that you understand the compliance landscape.

> <div class="bg-zinc-800 border-l-4 border-primary p-4 my-6">
> <p class="text-white italic">“46% of our recovery cases succeeded only after copying the bank’s AML desk on the police e-mail.”</p>
> </div>

### 🔺 5. Leverage International Liaison Bridges
If you receive silence after five working days, it's time to escalate politely.
- **CC Your Embassy:** Send a polite follow-up email to the police and CC your own country's embassy in that jurisdiction. Specifically, target the **Police Liaison Officer** or the **Commercial Attaché**. Embassies dislike dealing with commercial disputes, but the mere fact they are copied forces the local police desk to demonstrate that they are taking action.

### 🔺 6. Escalate via Mutual Legal Assistance (MLA)
This is an advanced move, but highly effective. An MLA is a formal government-to-government request for legal or judicial assistance.
- **Draft the Template:** Even if your home country's police have not yet formally initiated an MLA request, you can draft a template of the request and mention in your follow-up that "we are preparing to support our national police in filing a Mutual Legal Assistance Treaty request." When the local police realize a formal, high-level request is coming anyway, it's often faster and easier for them to open a domestic investigation first.

### 🔺 7. Create ‘Public-Relations Heat’ (The Last Resort)
This should only be used when all other avenues have failed.
- **Engage Local Business Media:** Compile a short, anonymized brief about the fraud (e.g., "US-based importer loses $250k to phantom Thai exporter") and send it to a reporter at a local English-language business newspaper. If they publish a story, CC the link in your final follow-up email. The risk of negative publicity can make a previously unresponsive police station suddenly very attentive.

---
<div class="bg-secondary/30 border border-primary rounded-lg p-8 mt-12 text-center">
  <h3 class="text-2xl font-bold text-white">Need the templates and contact lists to push the right desks?</h3>
  <p class="text-muted-foreground mt-2">Our team has the experience and contacts to navigate these complex channels for you.</p>
  <a href="/submit" class="inline-block mt-6 bg-primary text-primary-foreground hover:bg-primary/80 px-6 py-3 rounded-md font-semibold">Start a Tactical Probe</a>
</div>
`,
  },
]

// Process all posts once when the module is loaded.
const allPosts: Post[] = postsData.map((post) => {
  const { rawContent, ...rest } = post
  const content = remark().use(html).processSync(rawContent).toString()
  return { ...rest, content }
})

export function getAllPosts(): Post[] {
  return allPosts
}

export function getPostBySlug(slug: string): Post | null {
  return allPosts.find((p) => p.slug === slug) || null
}
