export default function Referrals() {
    return (
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Referral Requests
        </h1>
  
        <p className="text-gray-400 mb-10 max-w-2xl">
          Looking for referrals? Please fill out the form below and share a
          public link to your resume. I personally review submissions and refer
          candidates where there is a relevant opportunity and fit.
        </p>
  
        <div className="w-full overflow-hidden rounded-lg border border-gray-800">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdwymWlRXacw-MNJcl89tpLDxfnedWmoI7Gf2YbIvPT_TJEJg/viewform?embedded=true"
            width="100%"
            height="950"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>
  
        <p className="text-sm text-gray-500 mt-4">
          If the form does not load, you can{" "}
          <a
            href="https://forms.gle/V5dFe96bfJh2uRME6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            open it in a new tab
          </a>.
        </p>
  
        <p className="text-xs text-gray-500 mt-6">
          Note: Submitting this form does not guarantee a referral. Referrals are
          based on role relevance, experience match, and current opportunities.
        </p>
      </section>
    );
  }
  