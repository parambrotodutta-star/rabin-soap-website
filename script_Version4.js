// Handle Distributor Form Submission
function submitDistributorForm(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        message: document.getElementById('message').value,
        submittedAt: new Date().toLocaleString()
    };
    
    // Save to localStorage (for demo purposes)
    let applications = JSON.parse(localStorage.getItem('applications')) || [];
    applications.push(formData);
    localStorage.setItem('applications', JSON.stringify(applications));
    
    // Show success message
    alert('✅ Your application has been submitted successfully!\n\nOur team will review it and contact you soon.');
    
    // Reset form
    document.getElementById('distributorForm').reset();
    
    // In production, you would send this data to a backend server
    console.log('Application submitted:', formData);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});