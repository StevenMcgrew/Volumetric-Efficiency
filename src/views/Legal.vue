<script setup>

function togglePanelVisibility(e) {
    e.currentTarget.classList.toggle("active")
    let panel = e.currentTarget.nextElementSibling
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px"
    }
}

</script>

<template>
    <div class="legal-page-container">

        <button class="accordion-btn" @click="togglePanelVisibility">Privacy Policy</button>
        <div class="accordian-panel">
            <p>What information is collected?</p>
            <ol>
                <li>The information from the calculator when you choose to save it.</li>
                <li>The information you enter into the save form when saving a calculation.</li>
            </ol>
        </div>
        
        <button id="termsBtn" class="accordion-btn terms-btn" @click="togglePanelVisibility">Terms of Service</button>
        <div class="accordian-panel">
            <p>These Terms govern your use of this website. Your information is not sold nor shared with advertisers.</p>
            <ol>

                <li><span>The services provided by this website</span>
                    <ul>
                        <li>The purpose of this website is to allow people to calculate the volumetric efficiency of 
                            an internal combustion engine, save it to a database, and search the database for records 
                            of previous calculations to use for comparison.
                        </li>
                        <li>If misuse or harmful conduct is detected, then appropriate action will be taken. Harmful 
                            content will be removed. Criminal activity will be referred to law enforcement.
                        </li>
                        <li>When you save information to the database, it may be modified by the website administrator 
                            for accuracy or any other reason.</li>
                    </ul>
                </li>

                <li><span>How the website service is funded</span>
                    <ul>
                        <li>The website owner pays for all costs.</li>
                        <li>There are no ads, and your information is not sold to anyone.</li>
                    </ul>
                </li>

                <li><span>Your commitments to this website</span>
                    <ul>
                        <li>This website will be used for your own personal use and not for commecial purposes.</li>
                        <li>You cannot use this website if you are under 13 years old, or if you violate the Terms or Policies, 
                            or if you are prohibited under applicable laws.</li>
                        <li>You may not use this website to do anything that violates these terms, or that is unlawful, 
                            misleading, discriminatory, or fraudulent, or that infringes or violates someone else's rights, 
                            including their intellectual property rights.</li>
                        <li>You may not upload viruses or malicious code or do anything that could disable, overburden, 
                            or impair the proper working or appearance of this website.</li>
                        <li>You may not access or collect data from our website using automated means or attempt to access 
                            data you do not have permission to access.</li>
                        <li>We can remove or restrict access to content that is in violation of these provisions.</li>
                        <li>We encourage you to report content or conduct that you believe violates your rights (including 
                            intellectual property rights) or our terms and policies.</li>
                        <li>We also can remove or restrict access to your content or information if we determine that doing 
                            so is reasonably necessary to avoid or mitigate adverse legal or regulatory impacts to us.</li>
                        <li>You give us permission to use content you create and share. Some content that you share or upload, 
                            may be protected by intellectual property laws.</li>
                        <li>You own the intellectual property rights (things like copyright or trademarks) in any such content 
                            that you create and share on this website. Nothing in these Terms takes away the rights you have 
                            to your own content. You are free to share your content with anyone else, wherever you want. 
                            However, to provide our services we need you to give us some legal permissions 
                            (known as a ‘license’) to use this content. This is solely for the purposes of providing our 
                            services. Specifically, when you share, post, or upload content that is covered by intellectual 
                            property rights, you grant us a non-exclusive, transferable, sub-licensable, royalty-free, and
                            worldwide license to host, use, distribute, modify, run, copy, publicly perform or display, 
                            translate, and create derivative works of your content. This means you give us permission to 
                            store, copy, and share it with others. This license will end when your content is deleted from 
                            our systems.</li>
                        <li>Permission to update software you use or download: If you download or use our software, you give 
                            us permission to download and install updates to the software where available.</li>
                        <li>If you use our content which is covered by intellectual property rights, we retain all rights to 
                            that content (but not your content).</li>
                        <li>You must obtain our written permission (or permission under an open source license) to modify, 
                            create derivative works of, decompile, or otherwise attempt to extract source code from us.</li>
                    </ul>
                </li>

                <li>
                    <ul><span>Additional provisions</span>
                        <li>We may need to update these Terms from time to time to accurately reflect our services and 
                            practices. Unless otherwise required by law, we will notify you before we make changes to these 
                            Terms and give you an opportunity to review them before they go into effect. Once any updated 
                            Terms are in effect, you will be bound by them if you continue to use our website. If you do not 
                            agree to our updated Terms, you can stop using this website at any time.</li>
                        <li>Our website is provided "as is," and we make no guarantees that it always will be safe, secure, or 
                            error-free, or that it will function without disruptions, delays, or imperfections. To the extent 
                            permitted by law, we also DISCLAIM ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING THE 
                            IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</li>
                        <li>We are not responsible for the actions of people who use this website or their conduct (whether 
                            online or offline) or any content they share (including offensive, inappropriate, obscene,
                            unlawful, and other objectionable content).</li>
                        <li>We cannot predict when issues might arise. Accordingly, our liability shall be limited to the 
                            fullest extent permitted by applicable law, and under no circumstance will we be liable to you 
                            for any lost profits, revenues, information, or data, or consequential, special, indirect, 
                            exemplary, punitive, or incidental damages arising out of or related to these Terms or website, 
                            even if we have been advised of the possibility of such damages. Our aggregate liability arising 
                            out of or relating to these Terms will be zero dollars.</li>
                        <li>For any claim, cause of action, or dispute you have against us that arises out of or relates to 
                            these Terms or the website, you agree that it will be resolved exclusively in the U.S. District 
                            Court for the Eastern District of Washington or a state court located in Spokane County. You also 
                            agree to submit to the personal jurisdiction of either of these courts for the purpose of 
                            litigating any such claim, and that the laws of the State of Washington will govern these Terms 
                            and any claim, without regard to conflict of law provisions.</li>
                        <li>If any portion of these Terms is found to be unenforceable, the remaining portion will remain in 
                            full force and effect. If we fail to enforce any of these Terms, it will not be considered a 
                            waiver. Any amendment to or waiver of these Terms must be made in writing and signed by us.</li>
                        <li>You will not transfer any of your rights or obligations under these Terms to anyone else without 
                            our consent.</li>
                        <li>These Terms do not confer any third-party beneficiary rights. All of our rights and obligations 
                            under these Terms are freely assignable by us in connection with a merger, acquisition, or sale 
                            of assets, or by operation of law or otherwise.</li>
                        <li>We always appreciate your feedback and other suggestions about our products and services. But you 
                            should know that we may use them without any restriction or obligation to compensate you, and we 
                            are under no obligation to keep them confidential.</li>
                        <li>We reserve all rights not expressly granted to you.</li>
                    </ul>
                </li>
            </ol>    
            <p>Date of Last Revision: 09/15/2022</p>
        </div>
        
        <button id="cookiesBtn" class="accordion-btn cookies-btn" @click="togglePanelVisibility">Cookie Policy</button>
        <div class="accordian-panel">
            <ol>
                <li>This website does not use cookies.</li>
                <li>No other parties use cookies in connection with this website.</li>
            </ol>
            <p>
                Date of Last Revision: 09/15/2022
            </p>
        </div>
        
        <button id="contactBtn" class="accordion-btn contact-btn" @click="togglePanelVisibility">Contact</button>
        <div class="accordian-panel">
            <p class="legal-text">
                Email: stevenmcgrew8224@gmail.com
            </p>
        </div>

    </div>  
</template>

<style scoped>
h4 {
    margin-bottom: 0;
}

ol, ul {
    padding-left: 15rem;
    margin-top: 5rem;
}

ul {
    list-style-type: disc;
}

.legal-page-container {
    max-width: 80ch;
    padding: 20rem 20rem 0rem 20rem;
    margin: 0 auto;
    min-height: 100vh;
}

.accordion-btn {
    width: 100%;
    text-align: left;
}

.accordion-btn:after {
    /* Unicode character */
    content: '\25BC';
    font-size: 13px;
    float: right;
    margin-left: 5px;
}

.active:after {
    /* Unicode character */
    content: "\25B2";
}

/* Hidden by default */
.accordian-panel {
    padding: 0 18px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
    margin: 0px 0px 8px 0px;
    box-shadow: inset 0px 0px 0px 1px var(--primary-color);
    position: relative;
    top: -3rem;
    border-bottom-left-radius: 4rem;
    border-bottom-right-radius: 4rem;
    background-color: white;
}
</style>