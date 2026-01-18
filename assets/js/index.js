      const form = document.getElementById('form');
          const submitBtn = form.querySelector('button[type="submit"]');

          form.addEventListener('submit', async (e) => {
              e.preventDefault();

              const formData = new FormData(form);
              formData.append("access_key", "2df1a6df-5bf6-4f22-95f1-20f9cfedc202");

              const originalText = submitBtn.textContent;

              submitBtn.textContent = "Sending...";
              submitBtn.disabled = true;

              try {
                  const response = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      body: formData
                  });

                  const data = await response.json();

                  if (response.ok) {
                      alert("Success! Your message has been sent.");
                      form.reset();
                  } else {
                      alert("Error: " + data.message);
                  }

              } catch (error) {
                  alert("Something went wrong. Please try again.");
              } finally {
                  submitBtn.textContent = originalText;
                  submitBtn.disabled = false;
              }
          });