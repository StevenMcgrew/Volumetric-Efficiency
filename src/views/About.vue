<script setup>

</script>

<template>
    <div class="about-page-container card">
        <h2>About</h2>
        <h3>What is volumetric efficiency?</h3>
        <p>
            Volumetric efficiency (VE) in an internal combustion engine is the percentage of air volume drawn into
            the engine cylinders compared to the cylinders' swept volume. In simple terms, it is a measure of how 
            well an engine is able to take in air. For example, if one of the cylinders in an engine has a swept 
            volume of 0.5L, and that cylinder took in 0.5L of air during the intake stroke, then it has 100% VE.
        </p>
        <p>
            Older engine designs will have around 80-90% VE. More advanced engine designs will have 90-100% VE (and
            sometimes slightly more). Supercharged and turbocharged engines will have over 100%. The best way to 
            know if your engine's VE is okay, is to compare it to a known good value from the same engine design. 
            This app has a database of VE values from several different engines that comes from users like you who 
            choose to save their calculations for everyone to use for comparisons.
        </p>
        <h3>How to use the VE calculator</h3>
        <ol>
            <li>
                Connect your scan tool to the car and set it to record these data PIDs: RPM, MAF and IAT. If you 
                record more PIDs, then the data transfer could be too slow. You will need to save your recording so 
                that you can review it in later steps.
            </li>
            <br>
            <li>
                Find a safe area to drive the car at wide open throttle (WOT) until the RPMs are close to redline. 
                It's important to keep the throttle wide open, because you are testing how well the engine can take 
                in air.
            </li>
            <br>
            <li>
                Review your recording and find the point where RPM's and MAF are at or near their highest values. 
                Use this point to collect your values for MAF, RPM, and IAT.
            </li>
            <br>
            <li>
                Input the values into the calculator, along with the engine size in Liters and the elevation of 
                your location. Then click the CALCULATE button to get the result.
            </li>
            <br>
            <li>
                BONUS: Save the result of your calculation, so that you and others can use it to make 
                comparisons in the future.
            </li>
            <br>
            <li>
                BONUS: Search for similar vehicles and engines to see how your vehicles VE compares. That way 
                you can make a judgement as to whether or not your vehcile has lower than normal VE.
            </li>
            <br>
            <li>
                BONUS: When you perform a search, the charts will update with the search results, and your 
                current result will show up in the charts as a white line. Sometimes these charts are useful for 
                making a visual comparison.
            </li>
        </ol>
        <h3>How to interpret the results</h3>
        <p>
            VE varies with engine design, so it's best to compare to a known good value for your engine. Low VE 
            calculations can be caused by a faulty MAF sensor that is sending inaccurate data to your scan tool,
            or it can be from an engine breathing problem. To figure out which is the case, take another road test
            and this time record all of the fuel trim data PIDs. If fuel trims show large positive values at 
            medium to high load, then the MAF sensor is suspected to be faulty or the air flowing through it has 
            been compromised. If fuel trims are closer to zero without much change under load, then check for an 
            engine breathing problem such as a restricted catalytic converter, a restricted intake system, 
            incorrect valve timing, or other things that can affect the engines ablility to move air in and out.
        </p>
    </div>    
</template>

<style scoped>
h2 {
    margin-top: 0;
}

.about-page-container {
    max-width: 80ch;
    padding: 20rem 30rem;
    margin: 20rem auto;
    background-color: white;
}
</style>
