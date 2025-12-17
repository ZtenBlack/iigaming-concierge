$(document).ready(function () {
    //getting the gtag value
    const params = new URLSearchParams(window.location.search);
    let qtag = params.get('qtag');
    if (qtag) {
        sessionStorage.setItem('qtag', qtag);
    } else {
        qtag = sessionStorage.getItem('qtag');
    }
    if (qtag) {
        //const newUrl = `https://10black.net/api/affiliate/?qtag=${qtag}`;
        const newUrl = `https://10black.net/api/affiliate/?qtag=${qtag}&signup=false`;
        $('#desktop-link').attr('href', newUrl);
        $('#mobile-link').attr('href', newUrl);
        console.log(newUrl);
    }
    //language selection code
    // const accessKey = 'd52fa6bf-a8a9-46c3-b195-2fcda479a705';
    // if (!sessionStorage.getItem('countryChecked')) {
    //     $.ajax({
    //         url: 'https://apiip.net/api/check?&accessKey=' + accessKey,
    //         success: function (result) {
    //             console.log(result.countryCode);
    //             sessionStorage.setItem('countryChecked', 'true');
    //             if (result.countryCode === 'PL') {
    //                 window.location.href = '/pl';
    //             } else if (result.countryCode === 'PT') {
    //                 window.location.href = '/pt';
    //             } else if (result.countryCode === 'IT') {
    //                 window.location.href = '/it';
    //             } else if (result.countryCode === 'DE') {
    //                 window.location.href = '/de';
    //             } else if (result.countryCode === 'GR') {
    //                 window.location.href = '/el';
    //             } else if (result.countryCode === 'ES') {
    //                 window.location.href = '/es';
    //             } else if (result.countryCode === 'FR') {
    //                 window.location.href = '/fr';
    //             } else if (result.countryCode === 'KZ') {
    //                 window.location.href = '/kk';
    //             } else if (result.countryCode === 'BR') {
    //                 window.location.href = '/br';
    //             } else if (result.countryCode === 'RU') {
    //                 window.location.href = '/ru';
    //             } else if (result.countryCode === 'RS') {
    //                 window.location.href = '/sr';
    //             } else if (result.countryCode === 'TR') {
    //                 window.location.href = '/tr';
    //             } else {
    //                 window.location.href = '/';
    //             }
    //         }
    //     });
    // }
});
