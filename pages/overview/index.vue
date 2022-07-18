<template>
    <NuxtLayout name="main">
        <div class="pt-6 px-4">
            <div
                class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4"
            >
                <div
                    class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2"
                >
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex-shrink-0">
                            <span
                                class="text-2xl sm:text-3xl leading-none font-bold text-gray-900"
                                >$45,385</span
                            >
                            <h3 class="text-base font-normal text-gray-500">
                                Earned this month
                            </h3>
                        </div>
                        <div
                            class="flex items-center justify-end flex-1 text-green-500 text-base font-bold"
                        >
                            12.5%
                            <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div id="main-chart" style="min-height: 435px">
                        <div
                            id="apexcharts0m0qswgrk"
                            class="apexcharts-canvas apexcharts0m0qswgrk apexcharts-theme-light"
                            style="width: 916px; height: 420px"
                        >
                            <svg
                                id="SvgjsSvg1389"
                                width="916"
                                height="420"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns:svgjs="http://svgjs.dev"
                                class="apexcharts-svg apexcharts-zoomable"
                                xmlns:data="ApexChartsNS"
                                transform="translate(0, 0)"
                                style="background: transparent"
                            >
                                <g
                                    id="SvgjsG1391"
                                    class="apexcharts-inner apexcharts-graphical"
                                    transform="translate(71.13917541503906, 30)"
                                >
                                    <defs id="SvgjsDefs1390">
                                        <clipPath id="gridRectMask0m0qswgrk">
                                            <rect
                                                id="SvgjsRect1397"
                                                width="842.8608245849609"
                                                height="379"
                                                x="-4"
                                                y="-2"
                                                rx="0"
                                                ry="0"
                                                opacity="1"
                                                stroke-width="0"
                                                stroke="none"
                                                stroke-dasharray="0"
                                                fill="#fff"
                                            ></rect>
                                        </clipPath>
                                        <clipPath
                                            id="forecastMask0m0qswgrk"
                                        ></clipPath>
                                        <clipPath
                                            id="nonForecastMask0m0qswgrk"
                                        ></clipPath>
                                        <clipPath
                                            id="gridRectMarkerMask0m0qswgrk"
                                        >
                                            <rect
                                                id="SvgjsRect1398"
                                                width="838.8608245849609"
                                                height="379"
                                                x="-2"
                                                y="-2"
                                                rx="0"
                                                ry="0"
                                                opacity="1"
                                                stroke-width="0"
                                                stroke="none"
                                                stroke-dasharray="0"
                                                fill="#fff"
                                            ></rect>
                                        </clipPath>
                                    </defs>
                                    <line
                                        id="SvgjsLine1396"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="375"
                                        stroke="#b6b6b6"
                                        stroke-dasharray="3"
                                        stroke-linecap="butt"
                                        class="apexcharts-xcrosshairs"
                                        x="0"
                                        y="0"
                                        width="1"
                                        height="375"
                                        fill="#b1b9c4"
                                        filter="none"
                                        fill-opacity="0.9"
                                        stroke-width="1"
                                    ></line>
                                    <g
                                        id="SvgjsG1405"
                                        class="apexcharts-xaxis"
                                        transform="translate(0, 0)"
                                    >
                                        <g
                                            id="SvgjsG1406"
                                            class="apexcharts-xaxis-texts-g"
                                            transform="translate(0, -4)"
                                        ></g>
                                        <line
                                            id="SvgjsLine1414"
                                            x1="0"
                                            y1="376"
                                            x2="834.8608245849609"
                                            y2="376"
                                            stroke="#f3f4f6"
                                            stroke-dasharray="0"
                                            stroke-width="1"
                                            stroke-linecap="butt"
                                        ></line>
                                    </g>
                                    <g id="SvgjsG1431" class="apexcharts-grid">
                                        <g
                                            id="SvgjsG1432"
                                            class="apexcharts-gridlines-horizontal"
                                            style="display: none"
                                        >
                                            <line
                                                id="SvgjsLine1441"
                                                x1="0"
                                                y1="0"
                                                x2="834.8608245849609"
                                                y2="0"
                                                stroke="#e0e0e0"
                                                stroke-dasharray="0"
                                                stroke-linecap="butt"
                                                class="apexcharts-gridline"
                                            ></line>
                                            <line
                                                id="SvgjsLine1442"
                                                x1="0"
                                                y1="62.5"
                                                x2="834.8608245849609"
                                                y2="62.5"
                                                stroke="#e0e0e0"
                                                stroke-dasharray="0"
                                                stroke-linecap="butt"
                                                class="apexcharts-gridline"
                                            ></line>
                                            <line
                                                id="SvgjsLine1443"
                                                x1="0"
                                                y1="125"
                                                x2="834.8608245849609"
                                                y2="125"
                                                stroke="#e0e0e0"
                                                stroke-dasharray="0"
                                                stroke-linecap="butt"
                                                class="apexcharts-gridline"
                                            ></line>
                                            <line
                                                id="SvgjsLine1444"
                                                x1="0"
                                                y1="187.5"
                                                x2="834.8608245849609"
                                                y2="187.5"
                                                stroke="#e0e0e0"
                                                stroke-dasharray="0"
                                                stroke-linecap="butt"
                                                class="apexcharts-gridline"
                                            ></line>
                                            <line
                                                id="SvgjsLine1445"
                                                x1="0"
                                                y1="250"
                                                x2="834.8608245849609"
                                                y2="250"
                                                stroke="#e0e0e0"
                                                stroke-dasharray="0"
                                                stroke-linecap="butt"
                                                class="apexcharts-gridline"
                                            ></line>
                                            <line
                                                id="SvgjsLine1446"
                                                x1="0"
                                                y1="312.5"
                                                x2="834.8608245849609"
                                                y2="312.5"
                                                stroke="#e0e0e0"
                                                stroke-dasharray="0"
                                                stroke-linecap="butt"
                                                class="apexcharts-gridline"
                                            ></line>
                                            <line
                                                id="SvgjsLine1447"
                                                x1="0"
                                                y1="375"
                                                x2="834.8608245849609"
                                                y2="375"
                                                stroke="#e0e0e0"
                                                stroke-dasharray="0"
                                                stroke-linecap="butt"
                                                class="apexcharts-gridline"
                                            ></line>
                                        </g>
                                        <g
                                            id="SvgjsG1433"
                                            class="apexcharts-gridlines-vertical"
                                            style="display: none"
                                        ></g>
                                        <line
                                            id="SvgjsLine1434"
                                            x1="0"
                                            y1="376"
                                            x2="0"
                                            y2="382"
                                            stroke="#f3f4f6"
                                            stroke-dasharray="0"
                                            stroke-linecap="butt"
                                            class="apexcharts-xaxis-tick"
                                        ></line>
                                        <line
                                            id="SvgjsLine1435"
                                            x1="139.14347076416016"
                                            y1="376"
                                            x2="139.14347076416016"
                                            y2="382"
                                            stroke="#f3f4f6"
                                            stroke-dasharray="0"
                                            stroke-linecap="butt"
                                            class="apexcharts-xaxis-tick"
                                        ></line>
                                        <line
                                            id="SvgjsLine1436"
                                            x1="278.2869415283203"
                                            y1="376"
                                            x2="278.2869415283203"
                                            y2="382"
                                            stroke="#f3f4f6"
                                            stroke-dasharray="0"
                                            stroke-linecap="butt"
                                            class="apexcharts-xaxis-tick"
                                        ></line>
                                        <line
                                            id="SvgjsLine1437"
                                            x1="417.43041229248047"
                                            y1="376"
                                            x2="417.43041229248047"
                                            y2="382"
                                            stroke="#f3f4f6"
                                            stroke-dasharray="0"
                                            stroke-linecap="butt"
                                            class="apexcharts-xaxis-tick"
                                        ></line>
                                        <line
                                            id="SvgjsLine1438"
                                            x1="556.5738830566406"
                                            y1="376"
                                            x2="556.5738830566406"
                                            y2="382"
                                            stroke="#f3f4f6"
                                            stroke-dasharray="0"
                                            stroke-linecap="butt"
                                            class="apexcharts-xaxis-tick"
                                        ></line>
                                        <line
                                            id="SvgjsLine1439"
                                            x1="695.7173538208008"
                                            y1="376"
                                            x2="695.7173538208008"
                                            y2="382"
                                            stroke="#f3f4f6"
                                            stroke-dasharray="0"
                                            stroke-linecap="butt"
                                            class="apexcharts-xaxis-tick"
                                        ></line>
                                        <line
                                            id="SvgjsLine1440"
                                            x1="834.8608245849609"
                                            y1="376"
                                            x2="834.8608245849609"
                                            y2="382"
                                            stroke="#f3f4f6"
                                            stroke-dasharray="0"
                                            stroke-linecap="butt"
                                            class="apexcharts-xaxis-tick"
                                        ></line>
                                        <line
                                            id="SvgjsLine1449"
                                            x1="0"
                                            y1="375"
                                            x2="834.8608245849609"
                                            y2="375"
                                            stroke="transparent"
                                            stroke-dasharray="0"
                                            stroke-linecap="butt"
                                        ></line>
                                        <line
                                            id="SvgjsLine1448"
                                            x1="0"
                                            y1="1"
                                            x2="0"
                                            y2="375"
                                            stroke="transparent"
                                            stroke-dasharray="0"
                                            stroke-linecap="butt"
                                        ></line>
                                    </g>
                                    <g
                                        id="SvgjsG1399"
                                        class="apexcharts-area-series apexcharts-plot-series"
                                    >
                                        <g
                                            id="SvgjsG1400"
                                            class="apexcharts-series"
                                            seriesName="Revenue"
                                            data:longestSeries="true"
                                            rel="1"
                                            data:realIndex="0"
                                        >
                                            <path
                                                id="SvgjsPath1403"
                                                d="M 0 375L 0 152.5C 48.70021476745605 152.5 90.4432559967041 238.75 139.14347076416016 238.75C 187.84368553161622 238.75 229.58672676086425 277.5 278.2869415283203 277.5C 326.98715629577634 277.5 368.73019752502444 46.25 417.43041229248047 46.25C 466.1306270599365 46.25 507.8736682891846 152.5 556.5738830566406 152.5C 605.2740978240967 152.5 647.0171390533447 215 695.7173538208008 215C 744.4175685882568 215 786.1606098175049 340 834.8608245849609 340C 834.8608245849609 340 834.8608245849609 340 834.8608245849609 375M 834.8608245849609 340z"
                                                fill="rgba(6,148,162,0.3)"
                                                fill-opacity="1"
                                                stroke-opacity="1"
                                                stroke-linecap="butt"
                                                stroke-width="0"
                                                stroke-dasharray="0"
                                                class="apexcharts-area"
                                                index="0"
                                                clip-path="url(#gridRectMask0m0qswgrk)"
                                                pathTo="M 0 375L 0 152.5C 48.70021476745605 152.5 90.4432559967041 238.75 139.14347076416016 238.75C 187.84368553161622 238.75 229.58672676086425 277.5 278.2869415283203 277.5C 326.98715629577634 277.5 368.73019752502444 46.25 417.43041229248047 46.25C 466.1306270599365 46.25 507.8736682891846 152.5 556.5738830566406 152.5C 605.2740978240967 152.5 647.0171390533447 215 695.7173538208008 215C 744.4175685882568 215 786.1606098175049 340 834.8608245849609 340C 834.8608245849609 340 834.8608245849609 340 834.8608245849609 375M 834.8608245849609 340z"
                                                pathFrom="M -1 4125L -1 4125L 139.14347076416016 4125L 278.2869415283203 4125L 417.43041229248047 4125L 556.5738830566406 4125L 695.7173538208008 4125L 834.8608245849609 4125"
                                            ></path>
                                            <path
                                                id="SvgjsPath1404"
                                                d="M 0 152.5C 48.70021476745605 152.5 90.4432559967041 238.75 139.14347076416016 238.75C 187.84368553161622 238.75 229.58672676086425 277.5 278.2869415283203 277.5C 326.98715629577634 277.5 368.73019752502444 46.25 417.43041229248047 46.25C 466.1306270599365 46.25 507.8736682891846 152.5 556.5738830566406 152.5C 605.2740978240967 152.5 647.0171390533447 215 695.7173538208008 215C 744.4175685882568 215 786.1606098175049 340 834.8608245849609 340"
                                                fill="none"
                                                fill-opacity="1"
                                                stroke="#0694a2"
                                                stroke-opacity="1"
                                                stroke-linecap="butt"
                                                stroke-width="4"
                                                stroke-dasharray="0"
                                                class="apexcharts-area"
                                                index="0"
                                                clip-path="url(#gridRectMask0m0qswgrk)"
                                                pathTo="M 0 152.5C 48.70021476745605 152.5 90.4432559967041 238.75 139.14347076416016 238.75C 187.84368553161622 238.75 229.58672676086425 277.5 278.2869415283203 277.5C 326.98715629577634 277.5 368.73019752502444 46.25 417.43041229248047 46.25C 466.1306270599365 46.25 507.8736682891846 152.5 556.5738830566406 152.5C 605.2740978240967 152.5 647.0171390533447 215 695.7173538208008 215C 744.4175685882568 215 786.1606098175049 340 834.8608245849609 340"
                                                pathFrom="M -1 4125L -1 4125L 139.14347076416016 4125L 278.2869415283203 4125L 417.43041229248047 4125L 556.5738830566406 4125L 695.7173538208008 4125L 834.8608245849609 4125"
                                            ></path>
                                            <g
                                                id="SvgjsG1401"
                                                class="apexcharts-series-markers-wrap"
                                                data:realIndex="0"
                                            >
                                                <g
                                                    class="apexcharts-series-markers"
                                                >
                                                    <circle
                                                        id="SvgjsCircle1455"
                                                        r="0"
                                                        cx="0"
                                                        cy="0"
                                                        class="apexcharts-marker whav1oaw6f no-pointer-events"
                                                        stroke="#ffffff"
                                                        fill="#0694a2"
                                                        fill-opacity="1"
                                                        stroke-width="2"
                                                        stroke-opacity="0.9"
                                                        default-marker-size="0"
                                                    ></circle>
                                                </g>
                                            </g>
                                        </g>
                                        <g
                                            id="SvgjsG1402"
                                            class="apexcharts-datalabels"
                                            data:realIndex="0"
                                        ></g>
                                    </g>
                                    <line
                                        id="SvgjsLine1450"
                                        x1="0"
                                        y1="0"
                                        x2="834.8608245849609"
                                        y2="0"
                                        stroke="#b6b6b6"
                                        stroke-dasharray="0"
                                        stroke-width="1"
                                        stroke-linecap="butt"
                                        class="apexcharts-ycrosshairs"
                                    ></line>
                                    <line
                                        id="SvgjsLine1451"
                                        x1="0"
                                        y1="0"
                                        x2="834.8608245849609"
                                        y2="0"
                                        stroke-dasharray="0"
                                        stroke-width="0"
                                        stroke-linecap="butt"
                                        class="apexcharts-ycrosshairs-hidden"
                                    ></line>
                                    <g
                                        id="SvgjsG1452"
                                        class="apexcharts-yaxis-annotations"
                                    ></g>
                                    <g
                                        id="SvgjsG1453"
                                        class="apexcharts-xaxis-annotations"
                                    ></g>
                                    <g
                                        id="SvgjsG1454"
                                        class="apexcharts-point-annotations"
                                    ></g>
                                    <rect
                                        id="SvgjsRect1456"
                                        width="0"
                                        height="0"
                                        x="0"
                                        y="0"
                                        rx="0"
                                        ry="0"
                                        opacity="1"
                                        stroke-width="0"
                                        stroke="none"
                                        stroke-dasharray="0"
                                        fill="#fefefe"
                                        class="apexcharts-zoom-rect"
                                    ></rect>
                                    <rect
                                        id="SvgjsRect1457"
                                        width="0"
                                        height="0"
                                        x="0"
                                        y="0"
                                        rx="0"
                                        ry="0"
                                        opacity="1"
                                        stroke-width="0"
                                        stroke="none"
                                        stroke-dasharray="0"
                                        fill="#fefefe"
                                        class="apexcharts-selection-rect"
                                    ></rect>
                                </g>
                                <rect
                                    id="SvgjsRect1395"
                                    width="0"
                                    height="0"
                                    x="0"
                                    y="0"
                                    rx="0"
                                    ry="0"
                                    opacity="1"
                                    stroke-width="0"
                                    stroke="none"
                                    stroke-dasharray="0"
                                    fill="#fefefe"
                                ></rect>
                                <g
                                    id="SvgjsG1415"
                                    class="apexcharts-yaxis"
                                    rel="0"
                                    transform="translate(41.13917541503906, 0)"
                                >
                                    <g
                                        id="SvgjsG1416"
                                        class="apexcharts-yaxis-texts-g"
                                    >
                                        <text
                                            id="SvgjsText1417"
                                            font-family="Inter, sans-serif"
                                            x="20"
                                            y="31.6"
                                            text-anchor="end"
                                            dominant-baseline="auto"
                                            font-size="14px"
                                            font-weight="500"
                                            fill="#6b7280"
                                            class="apexcharts-text apexcharts-yaxis-label"
                                            style="
                                                font-family: Inter, sans-serif;
                                            "
                                        >
                                            <tspan id="SvgjsTspan1418">
                                                $6600
                                            </tspan>
                                            <title>$6600</title>
                                        </text>
                                        <text
                                            id="SvgjsText1419"
                                            font-family="Inter, sans-serif"
                                            x="20"
                                            y="94.1"
                                            text-anchor="end"
                                            dominant-baseline="auto"
                                            font-size="14px"
                                            font-weight="500"
                                            fill="#6b7280"
                                            class="apexcharts-text apexcharts-yaxis-label"
                                            style="
                                                font-family: Inter, sans-serif;
                                            "
                                        >
                                            <tspan id="SvgjsTspan1420">
                                                $6500
                                            </tspan>
                                            <title>$6500</title>
                                        </text>
                                        <text
                                            id="SvgjsText1421"
                                            font-family="Inter, sans-serif"
                                            x="20"
                                            y="156.6"
                                            text-anchor="end"
                                            dominant-baseline="auto"
                                            font-size="14px"
                                            font-weight="500"
                                            fill="#6b7280"
                                            class="apexcharts-text apexcharts-yaxis-label"
                                            style="
                                                font-family: Inter, sans-serif;
                                            "
                                        >
                                            <tspan id="SvgjsTspan1422">
                                                $6400
                                            </tspan>
                                            <title>$6400</title>
                                        </text>
                                        <text
                                            id="SvgjsText1423"
                                            font-family="Inter, sans-serif"
                                            x="20"
                                            y="219.1"
                                            text-anchor="end"
                                            dominant-baseline="auto"
                                            font-size="14px"
                                            font-weight="500"
                                            fill="#6b7280"
                                            class="apexcharts-text apexcharts-yaxis-label"
                                            style="
                                                font-family: Inter, sans-serif;
                                            "
                                        >
                                            <tspan id="SvgjsTspan1424">
                                                $6300
                                            </tspan>
                                            <title>$6300</title>
                                        </text>
                                        <text
                                            id="SvgjsText1425"
                                            font-family="Inter, sans-serif"
                                            x="20"
                                            y="281.6"
                                            text-anchor="end"
                                            dominant-baseline="auto"
                                            font-size="14px"
                                            font-weight="500"
                                            fill="#6b7280"
                                            class="apexcharts-text apexcharts-yaxis-label"
                                            style="
                                                font-family: Inter, sans-serif;
                                            "
                                        >
                                            <tspan id="SvgjsTspan1426">
                                                $6200
                                            </tspan>
                                            <title>$6200</title>
                                        </text>
                                        <text
                                            id="SvgjsText1427"
                                            font-family="Inter, sans-serif"
                                            x="20"
                                            y="344.1"
                                            text-anchor="end"
                                            dominant-baseline="auto"
                                            font-size="14px"
                                            font-weight="500"
                                            fill="#6b7280"
                                            class="apexcharts-text apexcharts-yaxis-label"
                                            style="
                                                font-family: Inter, sans-serif;
                                            "
                                        >
                                            <tspan id="SvgjsTspan1428">
                                                $6100
                                            </tspan>
                                            <title>$6100</title>
                                        </text>
                                        <text
                                            id="SvgjsText1429"
                                            font-family="Inter, sans-serif"
                                            x="20"
                                            y="406.6"
                                            text-anchor="end"
                                            dominant-baseline="auto"
                                            font-size="14px"
                                            font-weight="500"
                                            fill="#6b7280"
                                            class="apexcharts-text apexcharts-yaxis-label"
                                            style="
                                                font-family: Inter, sans-serif;
                                            "
                                        >
                                            <tspan id="SvgjsTspan1430">
                                                $6000
                                            </tspan>
                                            <title>$6000</title>
                                        </text>
                                    </g>
                                </g>
                                <g
                                    id="SvgjsG1392"
                                    class="apexcharts-annotations"
                                ></g>
                            </svg>
                            <div
                                class="apexcharts-legend"
                                style="max-height: 210px"
                            ></div>
                            <div
                                class="apexcharts-tooltip apexcharts-theme-light"
                            >
                                <div
                                    class="apexcharts-tooltip-title"
                                    style="
                                        font-family: Inter, sans-serif;
                                        font-size: 14px;
                                    "
                                ></div>
                                <div
                                    class="apexcharts-tooltip-series-group"
                                    style="order: 1"
                                >
                                    <span
                                        class="apexcharts-tooltip-marker"
                                        style="
                                            background-color: rgb(6, 148, 162);
                                        "
                                    ></span>
                                    <div
                                        class="apexcharts-tooltip-text"
                                        style="
                                            font-family: Inter, sans-serif;
                                            font-size: 14px;
                                        "
                                    >
                                        <div class="apexcharts-tooltip-y-group">
                                            <span
                                                class="apexcharts-tooltip-text-y-label"
                                            ></span
                                            ><span
                                                class="apexcharts-tooltip-text-y-value"
                                            ></span>
                                        </div>
                                        <div
                                            class="apexcharts-tooltip-goals-group"
                                        >
                                            <span
                                                class="apexcharts-tooltip-text-goals-label"
                                            ></span
                                            ><span
                                                class="apexcharts-tooltip-text-goals-value"
                                            ></span>
                                        </div>
                                        <div class="apexcharts-tooltip-z-group">
                                            <span
                                                class="apexcharts-tooltip-text-z-label"
                                            ></span
                                            ><span
                                                class="apexcharts-tooltip-text-z-value"
                                            ></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light"
                            >
                                <div
                                    class="apexcharts-xaxistooltip-text"
                                    style="
                                        font-family: Inter, sans-serif;
                                        font-size: 12px;
                                    "
                                ></div>
                            </div>
                            <div
                                class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"
                            >
                                <div class="apexcharts-yaxistooltip-text"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                    <div class="mb-4 flex items-center justify-between">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900 mb-2">
                                Latest Transactions
                            </h3>
                            <span class="text-base font-normal text-gray-500"
                                >This is a list of latest transactions</span
                            >
                        </div>
                        <div class="flex-shrink-0">
                            <a
                                href="#"
                                class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
                                >View all</a
                            >
                        </div>
                    </div>

                    <div class="flex flex-col mt-8">
                        <div class="overflow-x-auto rounded-lg">
                            <div class="align-middle inline-block min-w-full">
                                <div
                                    class="shadow overflow-hidden sm:rounded-lg"
                                >
                                    <table
                                        class="min-w-full divide-y divide-gray-200"
                                    >
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Transaction
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Date &amp; Time
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Amount
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white">
                                            <tr>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-normal text-gray-900"
                                                >
                                                    Payment from
                                                    <span class="font-semibold"
                                                        >Bonnie Green</span
                                                    >
                                                </td>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-normal text-gray-500"
                                                >
                                                    Apr 23 ,2021
                                                </td>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900"
                                                >
                                                    $2300
                                                </td>
                                            </tr>
                                            <tr class="bg-gray-50">
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left"
                                                >
                                                    Payment refund to
                                                    <span class="font-semibold"
                                                        >#00910</span
                                                    >
                                                </td>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-normal text-gray-500"
                                                >
                                                    Apr 23 ,2021
                                                </td>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900"
                                                >
                                                    -$670
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-normal text-gray-900"
                                                >
                                                    Payment failed from
                                                    <span class="font-semibold"
                                                        >#087651</span
                                                    >
                                                </td>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-normal text-gray-500"
                                                >
                                                    Apr 18 ,2021
                                                </td>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900"
                                                >
                                                    $234
                                                </td>
                                            </tr>
                                            <tr class="bg-gray-50">
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left"
                                                >
                                                    Payment from
                                                    <span class="font-semibold"
                                                        >Lana Byrd</span
                                                    >
                                                </td>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-normal text-gray-500"
                                                >
                                                    Apr 15 ,2021
                                                </td>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900"
                                                >
                                                    $5000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-normal text-gray-900"
                                                >
                                                    Payment from
                                                    <span class="font-semibold"
                                                        >Jese Leos</span
                                                    >
                                                </td>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-normal text-gray-500"
                                                >
                                                    Apr 15 ,2021
                                                </td>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900"
                                                >
                                                    $2300
                                                </td>
                                            </tr>
                                            <tr class="bg-gray-50">
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left"
                                                >
                                                    Payment from
                                                    <span class="font-semibold"
                                                        >THEMESBERG LLC</span
                                                    >
                                                </td>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-normal text-gray-500"
                                                >
                                                    Apr 11 ,2021
                                                </td>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900"
                                                >
                                                    $560
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-normal text-gray-900"
                                                >
                                                    Payment from
                                                    <span class="font-semibold"
                                                        >Lana Lysle</span
                                                    >
                                                </td>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-normal text-gray-500"
                                                >
                                                    Apr 6 ,2021
                                                </td>
                                                <td
                                                    class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900"
                                                >
                                                    $1437
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
            >
                <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <span
                                class="text-2xl sm:text-3xl leading-none font-bold text-gray-900"
                                >$2,340</span
                            >
                            <h3 class="text-base font-normal text-gray-500">
                                Earnings this week
                            </h3>
                        </div>
                        <div
                            class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold"
                        >
                            14.6%
                            <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <span
                                class="text-2xl sm:text-3xl leading-none font-bold text-gray-900"
                                >5,355</span
                            >
                            <h3 class="text-base font-normal text-gray-500">
                                Visitors this week
                            </h3>
                        </div>
                        <div
                            class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold"
                        >
                            32.9%
                            <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <span
                                class="text-2xl sm:text-3xl leading-none font-bold text-gray-900"
                                >385</span
                            >
                            <h3 class="text-base font-normal text-gray-500">
                                Invoice generated
                            </h3>
                        </div>
                        <div
                            class="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold"
                        >
                            -2.7%
                            <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                <div class="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                    <div class="flex items-center justify-between mb-4">
                        <h3
                            class="text-xl font-bold leading-none text-gray-900"
                        >
                            Recent Clients
                        </h3>
                        <a
                            href="#"
                            class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
                        >
                            View all
                        </a>
                    </div>
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200">
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img
                                            class="h-8 w-8 rounded-full"
                                            src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
                                            alt="Neil image"
                                        />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p
                                            class="text-sm font-medium text-gray-900 truncate"
                                        >
                                            Neil Sims
                                        </p>
                                        <p
                                            class="text-sm text-gray-500 truncate"
                                        >
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div
                                        class="inline-flex items-center text-base font-semibold text-gray-900"
                                    >
                                        $320
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img
                                            class="h-8 w-8 rounded-full"
                                            src="https://demo.themesberg.com/windster/images/users/bonnie-green.png"
                                            alt="Neil image"
                                        />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p
                                            class="text-sm font-medium text-gray-900 truncate"
                                        >
                                            Bonnie Green
                                        </p>
                                        <p
                                            class="text-sm text-gray-500 truncate"
                                        >
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div
                                        class="inline-flex items-center text-base font-semibold text-gray-900"
                                    >
                                        $3467
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img
                                            class="h-8 w-8 rounded-full"
                                            src="https://demo.themesberg.com/windster/images/users/michael-gough.png"
                                            alt="Neil image"
                                        />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p
                                            class="text-sm font-medium text-gray-900 truncate"
                                        >
                                            Michael Gough
                                        </p>
                                        <p
                                            class="text-sm text-gray-500 truncate"
                                        >
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div
                                        class="inline-flex items-center text-base font-semibold text-gray-900"
                                    >
                                        $67
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img
                                            class="h-8 w-8 rounded-full"
                                            src="https://demo.themesberg.com/windster/images/users/thomas-lean.png"
                                            alt="Neil image"
                                        />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p
                                            class="text-sm font-medium text-gray-900 truncate"
                                        >
                                            Thomes Lean
                                        </p>
                                        <p
                                            class="text-sm text-gray-500 truncate"
                                        >
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div
                                        class="inline-flex items-center text-base font-semibold text-gray-900"
                                    >
                                        $2367
                                    </div>
                                </div>
                            </li>
                            <li class="pt-3 sm:pt-4 pb-0">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img
                                            class="h-8 w-8 rounded-full"
                                            src="https://demo.themesberg.com/windster/images/users/lana-byrd.png"
                                            alt="Neil image"
                                        />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p
                                            class="text-sm font-medium text-gray-900 truncate"
                                        >
                                            Lana Byrd
                                        </p>
                                        <p
                                            class="text-sm text-gray-500 truncate"
                                        >
                                            email@windster.com
                                        </p>
                                    </div>
                                    <div
                                        class="inline-flex items-center text-base font-semibold text-gray-900"
                                    >
                                        $367
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                    <h3
                        class="text-xl leading-none font-bold text-gray-900 mb-10"
                    >
                        Acquisition Overview
                    </h3>
                    <div class="block w-full overflow-x-auto">
                        <table
                            class="items-center w-full bg-transparent border-collapse"
                        >
                            <thead>
                                <tr>
                                    <th
                                        class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap"
                                    >
                                        Top Channels
                                    </th>
                                    <th
                                        class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap"
                                    >
                                        Users
                                    </th>
                                    <th
                                        class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"
                                    ></th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                <tr class="text-gray-500">
                                    <th
                                        class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left"
                                    >
                                        Organic Search
                                    </th>
                                    <td
                                        class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4"
                                    >
                                        5,649
                                    </td>
                                    <td
                                        class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4"
                                    >
                                        <div class="flex items-center">
                                            <span
                                                class="mr-2 text-xs font-medium"
                                                >30%</span
                                            >
                                            <div class="relative w-full">
                                                <div
                                                    class="w-full bg-gray-200 rounded-sm h-2"
                                                >
                                                    <div
                                                        class="bg-cyan-600 h-2 rounded-sm"
                                                        style="width: 30%"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th
                                        class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left"
                                    >
                                        Referral
                                    </th>
                                    <td
                                        class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4"
                                    >
                                        4,025
                                    </td>
                                    <td
                                        class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4"
                                    >
                                        <div class="flex items-center">
                                            <span
                                                class="mr-2 text-xs font-medium"
                                                >24%</span
                                            >
                                            <div class="relative w-full">
                                                <div
                                                    class="w-full bg-gray-200 rounded-sm h-2"
                                                >
                                                    <div
                                                        class="bg-orange-300 h-2 rounded-sm"
                                                        style="width: 24%"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th
                                        class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left"
                                    >
                                        Direct
                                    </th>
                                    <td
                                        class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4"
                                    >
                                        3,105
                                    </td>
                                    <td
                                        class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4"
                                    >
                                        <div class="flex items-center">
                                            <span
                                                class="mr-2 text-xs font-medium"
                                                >18%</span
                                            >
                                            <div class="relative w-full">
                                                <div
                                                    class="w-full bg-gray-200 rounded-sm h-2"
                                                >
                                                    <div
                                                        class="bg-teal-400 h-2 rounded-sm"
                                                        style="width: 18%"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th
                                        class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left"
                                    >
                                        Social
                                    </th>
                                    <td
                                        class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4"
                                    >
                                        1251
                                    </td>
                                    <td
                                        class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4"
                                    >
                                        <div class="flex items-center">
                                            <span
                                                class="mr-2 text-xs font-medium"
                                                >12%</span
                                            >
                                            <div class="relative w-full">
                                                <div
                                                    class="w-full bg-gray-200 rounded-sm h-2"
                                                >
                                                    <div
                                                        class="bg-pink-600 h-2 rounded-sm"
                                                        style="width: 12%"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th
                                        class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left"
                                    >
                                        Other
                                    </th>
                                    <td
                                        class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4"
                                    >
                                        734
                                    </td>
                                    <td
                                        class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4"
                                    >
                                        <div class="flex items-center">
                                            <span
                                                class="mr-2 text-xs font-medium"
                                                >9%</span
                                            >
                                            <div class="relative w-full">
                                                <div
                                                    class="w-full bg-gray-200 rounded-sm h-2"
                                                >
                                                    <div
                                                        class="bg-indigo-600 h-2 rounded-sm"
                                                        style="width: 9%"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-gray-500">
                                    <th
                                        class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left"
                                    >
                                        Email
                                    </th>
                                    <td
                                        class="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0"
                                    >
                                        456
                                    </td>
                                    <td
                                        class="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0"
                                    >
                                        <div class="flex items-center">
                                            <span
                                                class="mr-2 text-xs font-medium"
                                                >7%</span
                                            >
                                            <div class="relative w-full">
                                                <div
                                                    class="w-full bg-gray-200 rounded-sm h-2"
                                                >
                                                    <div
                                                        class="bg-purple-500 h-2 rounded-sm"
                                                        style="width: 7%"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
