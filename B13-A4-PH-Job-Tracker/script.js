let jobs = [

    { id: 1, company: "Mobile First Corp", pos: "React Native Developer", loc: "Remote", type: "Full-time", salary: "$130,000 - $175,000", status: "all", desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide." },
    { id: 2, company: "WebFlow Agency", pos: "Web Designer & Developer", loc: "Los Angeles, CA", type: "Onsite", salary: "$80,000 - $120,000", status: "all", desc: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends." },
    { id: 3, company: "DataViz Solutions", pos: "Data Visualization Specialist", loc: "Boston, MA", type: "Contract", salary: "$70k", status: "all", desc: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking." },
    { id: 4, company: "CloudFirst Inc", pos: "Backend Developer", loc: "Seattle, WA", type: "Full-time", salary: "$140,000 - $190,000", status: "all", desc: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure." },
    { id: 5, company: "Innovation Labs", pos: "UI/UX Designer", loc: "Austin, TX", type: "Full-time", salary: "$110,000 - $150,000", status: "all", desc: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required." },
    { id: 6, company: "MegaCorp Solutions", pos: "JavaScript Developer", loc: "New York, NY", type: "Full-time", salary: "$130,000 - $170,000", status: "all", desc: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities." },
    { id: 7, company: "StartupXYZ", pos: "Full Stack Engineer", loc: "Remote", type: "Onsite", salary: "$120,000 - $160,000", status: "all", desc: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included." },
    { id: 8, company: "TechCorp Industries", pos: "Senior Frontend Developer", loc: "San Francisco, CA", type: "Full-time", salary: "$130,000 - $175,000", status: "all", desc: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects." }

];

let currentTab = "all";

function init() {
    renderJobs();
    updateDashboard();
}
    
function renderJobs() {
    const container = document.getElementById('jobs-container');
     const emptyState = document.getElementById('empty-state');
         const filteredJobs = currentTab === 'all' ? jobs : jobs.filter(j => j.status === currentTab);
    document.getElementById('tab-job-count').innerText = `${filteredJobs.length} Jobs`;
    container.innerHTML = "";

    if (filteredJobs.length === 0) {
        container.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } 
    
    else {
         container.classList.remove('hidden');
        emptyState.classList.add('hidden');

       filteredJobs.forEach(job => {
            container.innerHTML +=

 `<div class="card bg-white shadow-xl border border-gray-100 p-6 hover:scale-[1.02] transition-transform">
                <div class="flex justify-between items-start">
                        <div>
                            <h3 class="font-bold text-lg">${job.company}</h3>
                            <p class="text-blue-600 font-medium">${job.pos}</p>
                        </div>
                        <button onclick="deleteJob(${job.id})" class="btn btn-ghost btn-sm text-red-400">✕</button>
                    </div>

                    <div class="my-4 text-sm text-gray-500 space-y-1">
                        <p>📍 ${job.loc} | 💼 ${job.type}</p>
                        <p>💰 Salary: ${job.salary}</p>
                        <p class="italic">"${job.desc}"</p>
                    </div>
 <div class="card-actions flex gap-2">
                        <button onclick="updateStatus(${job.id}, 'interview')" class="btn btn-sm flex-1 ${job.status === 'interview' ? 'btn-warning' : 'btn-outline'}">Interview</button>
                        <button onclick="updateStatus(${job.id}, 'rejected')" class="btn btn-sm flex-1 ${job.status === 'rejected' ? 'btn-error' : 'btn-outline'}">Rejected</button>
 </div>
</div>
            `;
        });
                    
    }
}

function updateStatus(id, status) {
    
}


function updateStatus(id, newStatus) {
    jobs = jobs.map(job => {
        if (job.id === id) {
            return { ...job, status: job.status === newStatus ? 'all' : newStatus };
        }
        return job;
    });
    renderJobs();
    updateDashboard();
}


function deleteJob(id) {
    jobs = jobs.filter(job => job.id !== id);
    renderJobs();
    updateDashboard();
}


function switchTab(tab, el) {
    currentTab = tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('tab-active'));
    el.classList.add('tab-active');
    renderJobs();
}

function updateDashboard() {
        document.getElementById('total-jobs-count').innerText = jobs.length;
        document.getElementById('interview-jobs-count').innerText = jobs.filter(j => j.status === 'interview').length;
        document.getElementById('rejected-jobs-count').innerText = jobs.filter(j => j.status === 'rejected').length;
}

init();
