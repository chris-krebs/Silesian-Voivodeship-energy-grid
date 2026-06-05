var wms_layers = [];

var lyr_SRTMGL1terraindata_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SRTMGL1 / terrain data<br />\
    <img src="styles/legend/SRTMGL1terraindata_0_0.png" /> 96<br />\
    <img src="styles/legend/SRTMGL1terraindata_0_1.png" /> 2073<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SRTMGL1terraindata_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1772221.754482, 6269890.316403, 2495520.145911, 6710889.694386]
        })
    });
var lyr_Dark_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ows.terrestris.de/osm-gray/service",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Dark",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Dark',
                            popuplayertitle: 'Dark',
                            type: '',
                            opacity: 0.300000,
                            
                            
                          });
              wms_layers.push([lyr_Dark_1, 0]);
var lyr_Contours_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Contours<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Contours_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1772221.754482, 6269890.316403, 2495520.145911, 6710889.694386]
        })
    });
var format_BoundariesCZK_3 = new ol.format.GeoJSON();
var features_BoundariesCZK_3 = format_BoundariesCZK_3.readFeatures(json_BoundariesCZK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoundariesCZK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoundariesCZK_3.addFeatures(features_BoundariesCZK_3);
var lyr_BoundariesCZK_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoundariesCZK_3, 
                style: style_BoundariesCZK_3,
                popuplayertitle: 'Boundaries // CZK',
                interactive: false,
                title: '<img src="styles/legend/BoundariesCZK_3.png" /> Boundaries // CZK'
            });
var format_BoundariesSVK_4 = new ol.format.GeoJSON();
var features_BoundariesSVK_4 = format_BoundariesSVK_4.readFeatures(json_BoundariesSVK_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoundariesSVK_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoundariesSVK_4.addFeatures(features_BoundariesSVK_4);
var lyr_BoundariesSVK_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoundariesSVK_4, 
                style: style_BoundariesSVK_4,
                popuplayertitle: 'Boundaries // SVK',
                interactive: false,
                title: '<img src="styles/legend/BoundariesSVK_4.png" /> Boundaries // SVK'
            });
var format_BoundariesPOLWojewodztwa_5 = new ol.format.GeoJSON();
var features_BoundariesPOLWojewodztwa_5 = format_BoundariesPOLWojewodztwa_5.readFeatures(json_BoundariesPOLWojewodztwa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoundariesPOLWojewodztwa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoundariesPOLWojewodztwa_5.addFeatures(features_BoundariesPOLWojewodztwa_5);
var lyr_BoundariesPOLWojewodztwa_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoundariesPOLWojewodztwa_5, 
                style: style_BoundariesPOLWojewodztwa_5,
                popuplayertitle: 'Boundaries // POL / Wojewodztwa',
                interactive: false,
                title: '<img src="styles/legend/BoundariesPOLWojewodztwa_5.png" /> Boundaries // POL / Wojewodztwa'
            });
var format_Voting_gminy_6 = new ol.format.GeoJSON();
var features_Voting_gminy_6 = format_Voting_gminy_6.readFeatures(json_Voting_gminy_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voting_gminy_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voting_gminy_6.addFeatures(features_Voting_gminy_6);
var lyr_Voting_gminy_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voting_gminy_6, 
                style: style_Voting_gminy_6,
                popuplayertitle: 'Voting_gminy',
                interactive: true,
    title: 'Voting_gminy<br />\
    <img src="styles/legend/Voting_gminy_6_0.png" /> KO<br />\
    <img src="styles/legend/Voting_gminy_6_1.png" /> PiS<br />\
    <img src="styles/legend/Voting_gminy_6_2.png" /> PSL<br />' });
var format_Voting_powiaty_7 = new ol.format.GeoJSON();
var features_Voting_powiaty_7 = format_Voting_powiaty_7.readFeatures(json_Voting_powiaty_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voting_powiaty_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voting_powiaty_7.addFeatures(features_Voting_powiaty_7);
var lyr_Voting_powiaty_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voting_powiaty_7, 
                style: style_Voting_powiaty_7,
                popuplayertitle: 'Voting_powiaty',
                interactive: true,
    title: 'Voting_powiaty<br />\
    <img src="styles/legend/Voting_powiaty_7_0.png" /> KO<br />\
    <img src="styles/legend/Voting_powiaty_7_1.png" /> PiS<br />' });
var format_Voting_wojewodztwa_8 = new ol.format.GeoJSON();
var features_Voting_wojewodztwa_8 = format_Voting_wojewodztwa_8.readFeatures(json_Voting_wojewodztwa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voting_wojewodztwa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voting_wojewodztwa_8.addFeatures(features_Voting_wojewodztwa_8);
var lyr_Voting_wojewodztwa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voting_wojewodztwa_8, 
                style: style_Voting_wojewodztwa_8,
                popuplayertitle: 'Voting_wojewodztwa',
                interactive: true,
    title: 'Voting_wojewodztwa<br />\
    <img src="styles/legend/Voting_wojewodztwa_8_0.png" /> KO<br />' });
var lyr_Population_density_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Population_density<br />\
    <img src="styles/legend/Population_density_9_0.png" /> 0,0000<br />\
    <img src="styles/legend/Population_density_9_1.png" /> 1505,8777<br />\
    <img src="styles/legend/Population_density_9_2.png" /> 3011,7630<br />\
    <img src="styles/legend/Population_density_9_3.png" /> 4517,6407<br />\
    <img src="styles/legend/Population_density_9_4.png" /> 6023,5260<br />\
    <img src="styles/legend/Population_density_9_5.png" /> 7529,4037<br />\
    <img src="styles/legend/Population_density_9_6.png" /> 9035,2813<br />\
    <img src="styles/legend/Population_density_9_7.png" /> 10541,1743<br />\
    <img src="styles/legend/Population_density_9_8.png" /> 12047,0674<br />\
    <img src="styles/legend/Population_density_9_9.png" /> 13552,9604<br />\
    <img src="styles/legend/Population_density_9_10.png" /> 15058,7766<br />\
    <img src="styles/legend/Population_density_9_11.png" /> 16564,6696<br />\
    <img src="styles/legend/Population_density_9_12.png" /> 18070,5627<br />\
    <img src="styles/legend/Population_density_9_13.png" /> 19576,4557<br />\
    <img src="styles/legend/Population_density_9_14.png" /> 21082,3487<br />\
    <img src="styles/legend/Population_density_9_15.png" /> 22588,2417<br />\
    <img src="styles/legend/Population_density_9_16.png" /> 24094,0579<br />\
    <img src="styles/legend/Population_density_9_17.png" /> 25599,9510<br />\
    <img src="styles/legend/Population_density_9_18.png" /> 27105,8440<br />\
    <img src="styles/legend/Population_density_9_19.png" /> 28611,7370<br />\
    <img src="styles/legend/Population_density_9_20.png" /> 30117,6300<br />\
    <img src="styles/legend/Population_density_9_21.png" /> 31623,5230<br />\
    <img src="styles/legend/Population_density_9_22.png" /> 33129,4161<br />\
    <img src="styles/legend/Population_density_9_23.png" /> 34635,2323<br />\
    <img src="styles/legend/Population_density_9_24.png" /> 36141,1253<br />\
    <img src="styles/legend/Population_density_9_25.png" /> 37647,0183<br />\
    <img src="styles/legend/Population_density_9_26.png" /> 39152,9114<br />\
    <img src="styles/legend/Population_density_9_27.png" /> 40658,8044<br />\
    <img src="styles/legend/Population_density_9_28.png" /> 42164,6974<br />\
    <img src="styles/legend/Population_density_9_29.png" /> 43670,5136<br />\
    <img src="styles/legend/Population_density_9_30.png" /> 45176,4066<br />\
    <img src="styles/legend/Population_density_9_31.png" /> 46682,2997<br />\
    <img src="styles/legend/Population_density_9_32.png" /> 48188,1927<br />\
    <img src="styles/legend/Population_density_9_33.png" /> 49694,0857<br />\
    <img src="styles/legend/Population_density_9_34.png" /> 51199,9787<br />\
    <img src="styles/legend/Population_density_9_35.png" /> 52705,8717<br />\
    <img src="styles/legend/Population_density_9_36.png" /> 54211,6880<br />\
    <img src="styles/legend/Population_density_9_37.png" /> 55717,5810<br />\
    <img src="styles/legend/Population_density_9_38.png" /> 57223,4740<br />\
    <img src="styles/legend/Population_density_9_39.png" /> 58729,3670<br />\
    <img src="styles/legend/Population_density_9_40.png" /> 60235,2601<br />\
    <img src="styles/legend/Population_density_9_41.png" /> 61741,1531<br />\
    <img src="styles/legend/Population_density_9_42.png" /> 63246,9693<br />\
    <img src="styles/legend/Population_density_9_43.png" /> 64752,8623<br />\
    <img src="styles/legend/Population_density_9_44.png" /> 66258,7553<br />\
    <img src="styles/legend/Population_density_9_45.png" /> 67764,6484<br />\
    <img src="styles/legend/Population_density_9_46.png" /> 69270,5414<br />\
    <img src="styles/legend/Population_density_9_47.png" /> 70776,4344<br />\
    <img src="styles/legend/Population_density_9_48.png" /> 72282,2506<br />\
    <img src="styles/legend/Population_density_9_49.png" /> 73788,1436<br />\
    <img src="styles/legend/Population_density_9_50.png" /> 75294,0367<br />\
    <img src="styles/legend/Population_density_9_51.png" /> 76799,9297<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Population_density_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1999858.060147, 6335829.532161, 2230745.155432, 6644346.227994]
        })
    });
var format_Data_agregate_log_gis_10 = new ol.format.GeoJSON();
var features_Data_agregate_log_gis_10 = format_Data_agregate_log_gis_10.readFeatures(json_Data_agregate_log_gis_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_agregate_log_gis_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_agregate_log_gis_10.addFeatures(features_Data_agregate_log_gis_10);
var lyr_Data_agregate_log_gis_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Data_agregate_log_gis_10, 
                style: style_Data_agregate_log_gis_10,
                popuplayertitle: 'Data_agregate_log_gis',
                interactive: true,
                title: '<img src="styles/legend/Data_agregate_log_gis_10.png" /> Data_agregate_log_gis'
            });
var lyr_generation_agregat_logarithmic_heat_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'generation_agregat_logarithmic_heat<br />\
    <img src="styles/legend/generation_agregat_logarithmic_heat_11_0.png" /> 0,0000<br />\
    <img src="styles/legend/generation_agregat_logarithmic_heat_11_1.png" /> 3,1292<br />\
    <img src="styles/legend/generation_agregat_logarithmic_heat_11_2.png" /> 6,2584<br />\
    <img src="styles/legend/generation_agregat_logarithmic_heat_11_3.png" /> 9,3877<br />\
    <img src="styles/legend/generation_agregat_logarithmic_heat_11_4.png" /> 12,5169<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/generation_agregat_logarithmic_heat_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1994555.844339, 6375365.453956, 2232445.596165, 6662932.690077]
        })
    });
var lyr_generation_agregat_heat_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'generation_agregat_heat<br />\
    <img src="styles/legend/generation_agregat_heat_12_0.png" /> 0,0000<br />\
    <img src="styles/legend/generation_agregat_heat_12_1.png" /> 5,1122<br />\
    <img src="styles/legend/generation_agregat_heat_12_2.png" /> 10,2244<br />\
    <img src="styles/legend/generation_agregat_heat_12_3.png" /> 15,3366<br />\
    <img src="styles/legend/generation_agregat_heat_12_4.png" /> 20,4488<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/generation_agregat_heat_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [1994555.844339, 6375365.453956, 2232445.596165, 6662932.690077]
        })
    });
var format_Windpowerplants_13 = new ol.format.GeoJSON();
var features_Windpowerplants_13 = format_Windpowerplants_13.readFeatures(json_Windpowerplants_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Windpowerplants_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Windpowerplants_13.addFeatures(features_Windpowerplants_13);
var lyr_Windpowerplants_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Windpowerplants_13, 
                style: style_Windpowerplants_13,
                popuplayertitle: 'Wind power plants',
                interactive: true,
                title: '<img src="styles/legend/Windpowerplants_13.png" /> Wind power plants'
            });
var format_Solarpowerplants_14 = new ol.format.GeoJSON();
var features_Solarpowerplants_14 = format_Solarpowerplants_14.readFeatures(json_Solarpowerplants_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solarpowerplants_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solarpowerplants_14.addFeatures(features_Solarpowerplants_14);
var lyr_Solarpowerplants_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solarpowerplants_14, 
                style: style_Solarpowerplants_14,
                popuplayertitle: 'Solar power plants',
                interactive: true,
                title: '<img src="styles/legend/Solarpowerplants_14.png" /> Solar power plants'
            });
var format_Oilgaspowerplants_15 = new ol.format.GeoJSON();
var features_Oilgaspowerplants_15 = format_Oilgaspowerplants_15.readFeatures(json_Oilgaspowerplants_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oilgaspowerplants_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oilgaspowerplants_15.addFeatures(features_Oilgaspowerplants_15);
var lyr_Oilgaspowerplants_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Oilgaspowerplants_15, 
                style: style_Oilgaspowerplants_15,
                popuplayertitle: 'Oil & gas power plants',
                interactive: true,
                title: '<img src="styles/legend/Oilgaspowerplants_15.png" /> Oil & gas power plants'
            });
var format_Nuclearpowerplants_16 = new ol.format.GeoJSON();
var features_Nuclearpowerplants_16 = format_Nuclearpowerplants_16.readFeatures(json_Nuclearpowerplants_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nuclearpowerplants_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nuclearpowerplants_16.addFeatures(features_Nuclearpowerplants_16);
var lyr_Nuclearpowerplants_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nuclearpowerplants_16, 
                style: style_Nuclearpowerplants_16,
                popuplayertitle: 'Nuclear power plants',
                interactive: true,
                title: '<img src="styles/legend/Nuclearpowerplants_16.png" /> Nuclear power plants'
            });
var format_Hydroelectricpowerplants_17 = new ol.format.GeoJSON();
var features_Hydroelectricpowerplants_17 = format_Hydroelectricpowerplants_17.readFeatures(json_Hydroelectricpowerplants_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hydroelectricpowerplants_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydroelectricpowerplants_17.addFeatures(features_Hydroelectricpowerplants_17);
var lyr_Hydroelectricpowerplants_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hydroelectricpowerplants_17, 
                style: style_Hydroelectricpowerplants_17,
                popuplayertitle: 'Hydroelectric power plants',
                interactive: true,
                title: '<img src="styles/legend/Hydroelectricpowerplants_17.png" /> Hydroelectric power plants'
            });
var format_Coalpowerplants_18 = new ol.format.GeoJSON();
var features_Coalpowerplants_18 = format_Coalpowerplants_18.readFeatures(json_Coalpowerplants_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coalpowerplants_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coalpowerplants_18.addFeatures(features_Coalpowerplants_18);
var lyr_Coalpowerplants_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coalpowerplants_18, 
                style: style_Coalpowerplants_18,
                popuplayertitle: 'Coal power plants',
                interactive: true,
                title: '<img src="styles/legend/Coalpowerplants_18.png" /> Coal power plants'
            });
var format_Coalminesnonoperating_19 = new ol.format.GeoJSON();
var features_Coalminesnonoperating_19 = format_Coalminesnonoperating_19.readFeatures(json_Coalminesnonoperating_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coalminesnonoperating_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coalminesnonoperating_19.addFeatures(features_Coalminesnonoperating_19);
var lyr_Coalminesnonoperating_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coalminesnonoperating_19, 
                style: style_Coalminesnonoperating_19,
                popuplayertitle: 'Coal mines // non-operating',
                interactive: true,
                title: '<img src="styles/legend/Coalminesnonoperating_19.png" /> Coal mines // non-operating'
            });
var format_Coalminesoperating_20 = new ol.format.GeoJSON();
var features_Coalminesoperating_20 = format_Coalminesoperating_20.readFeatures(json_Coalminesoperating_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coalminesoperating_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coalminesoperating_20.addFeatures(features_Coalminesoperating_20);
var lyr_Coalminesoperating_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coalminesoperating_20, 
                style: style_Coalminesoperating_20,
                popuplayertitle: 'Coal mines // operating',
                interactive: true,
                title: '<img src="styles/legend/Coalminesoperating_20.png" /> Coal mines // operating'
            });
var format_Cementconcreteplants_21 = new ol.format.GeoJSON();
var features_Cementconcreteplants_21 = format_Cementconcreteplants_21.readFeatures(json_Cementconcreteplants_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cementconcreteplants_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cementconcreteplants_21.addFeatures(features_Cementconcreteplants_21);
var lyr_Cementconcreteplants_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cementconcreteplants_21, 
                style: style_Cementconcreteplants_21,
                popuplayertitle: 'Cement & concrete plants',
                interactive: true,
                title: '<img src="styles/legend/Cementconcreteplants_21.png" /> Cement & concrete plants'
            });
var format_Bioenergypowerplants_22 = new ol.format.GeoJSON();
var features_Bioenergypowerplants_22 = format_Bioenergypowerplants_22.readFeatures(json_Bioenergypowerplants_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bioenergypowerplants_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bioenergypowerplants_22.addFeatures(features_Bioenergypowerplants_22);
var lyr_Bioenergypowerplants_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bioenergypowerplants_22, 
                style: style_Bioenergypowerplants_22,
                popuplayertitle: 'Bio-energy power plants',
                interactive: true,
                title: '<img src="styles/legend/Bioenergypowerplants_22.png" /> Bio-energy power plants'
            });
var format_Boundariespolslaskiesilesian_voivodeship_boundaries_23 = new ol.format.GeoJSON();
var features_Boundariespolslaskiesilesian_voivodeship_boundaries_23 = format_Boundariespolslaskiesilesian_voivodeship_boundaries_23.readFeatures(json_Boundariespolslaskiesilesian_voivodeship_boundaries_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundariespolslaskiesilesian_voivodeship_boundaries_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundariespolslaskiesilesian_voivodeship_boundaries_23.addFeatures(features_Boundariespolslaskiesilesian_voivodeship_boundaries_23);
var lyr_Boundariespolslaskiesilesian_voivodeship_boundaries_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundariespolslaskiesilesian_voivodeship_boundaries_23, 
                style: style_Boundariespolslaskiesilesian_voivodeship_boundaries_23,
                popuplayertitle: 'Boundaries pol slaskie — silesian_voivodeship_boundaries',
                interactive: false,
                title: '<img src="styles/legend/Boundariespolslaskiesilesian_voivodeship_boundaries_23.png" /> Boundaries pol slaskie — silesian_voivodeship_boundaries'
            });
var format_Grid_24 = new ol.format.GeoJSON();
var features_Grid_24 = format_Grid_24.readFeatures(json_Grid_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grid_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grid_24.addFeatures(features_Grid_24);
var lyr_Grid_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grid_24, 
                style: style_Grid_24,
                popuplayertitle: 'Grid',
                interactive: false,
                title: '<img src="styles/legend/Grid_24.png" /> Grid'
            });
var group_Bioenergypower = new ol.layer.Group({
                                layers: [lyr_Bioenergypowerplants_22,],
                                fold: 'close',
                                title: 'Bioenergy power'});
var group_Cementandconcrete = new ol.layer.Group({
                                layers: [lyr_Cementconcreteplants_21,],
                                fold: 'close',
                                title: 'Cement and concrete'});
var group_Coalmineoperating = new ol.layer.Group({
                                layers: [lyr_Coalminesoperating_20,],
                                fold: 'close',
                                title: 'Coal mine // operating'});
var group_Coalminenonoperating = new ol.layer.Group({
                                layers: [lyr_Coalminesnonoperating_19,],
                                fold: 'close',
                                title: 'Coal mine // non-operating'});
var group_Coalpower = new ol.layer.Group({
                                layers: [lyr_Coalpowerplants_18,],
                                fold: 'close',
                                title: 'Coal power'});
var group_Hydropower = new ol.layer.Group({
                                layers: [lyr_Hydroelectricpowerplants_17,],
                                fold: 'close',
                                title: 'Hydro power'});
var group_Nuclearpower = new ol.layer.Group({
                                layers: [lyr_Nuclearpowerplants_16,],
                                fold: 'close',
                                title: 'Nuclear power'});
var group_Oilandgaspower = new ol.layer.Group({
                                layers: [lyr_Oilgaspowerplants_15,],
                                fold: 'close',
                                title: 'Oil and gas power'});
var group_Solarpower = new ol.layer.Group({
                                layers: [lyr_Solarpowerplants_14,],
                                fold: 'close',
                                title: 'Solar power'});
var group_Windpower = new ol.layer.Group({
                                layers: [lyr_Windpowerplants_13,],
                                fold: 'close',
                                title: 'Wind power'});
var group_Generation_agregate = new ol.layer.Group({
                                layers: [lyr_Data_agregate_log_gis_10,lyr_generation_agregat_logarithmic_heat_11,lyr_generation_agregat_heat_12,],
                                fold: 'close',
                                title: 'Generation_agregate'});
var group_Heatmap = new ol.layer.Group({
                                layers: [lyr_Population_density_9,],
                                fold: 'close',
                                title: 'Heatmap'});

lyr_SRTMGL1terraindata_0.setVisible(true);lyr_Dark_1.setVisible(true);lyr_Contours_2.setVisible(true);lyr_BoundariesCZK_3.setVisible(true);lyr_BoundariesSVK_4.setVisible(true);lyr_BoundariesPOLWojewodztwa_5.setVisible(true);lyr_Voting_gminy_6.setVisible(false);lyr_Voting_powiaty_7.setVisible(false);lyr_Voting_wojewodztwa_8.setVisible(false);lyr_Population_density_9.setVisible(false);lyr_Data_agregate_log_gis_10.setVisible(false);lyr_generation_agregat_logarithmic_heat_11.setVisible(false);lyr_generation_agregat_heat_12.setVisible(false);lyr_Windpowerplants_13.setVisible(true);lyr_Solarpowerplants_14.setVisible(true);lyr_Oilgaspowerplants_15.setVisible(true);lyr_Nuclearpowerplants_16.setVisible(true);lyr_Hydroelectricpowerplants_17.setVisible(true);lyr_Coalpowerplants_18.setVisible(true);lyr_Coalminesnonoperating_19.setVisible(true);lyr_Coalminesoperating_20.setVisible(true);lyr_Cementconcreteplants_21.setVisible(true);lyr_Bioenergypowerplants_22.setVisible(true);lyr_Boundariespolslaskiesilesian_voivodeship_boundaries_23.setVisible(true);lyr_Grid_24.setVisible(true);
var layersList = [lyr_SRTMGL1terraindata_0,lyr_Dark_1,lyr_Contours_2,lyr_BoundariesCZK_3,lyr_BoundariesSVK_4,lyr_BoundariesPOLWojewodztwa_5,lyr_Voting_gminy_6,lyr_Voting_powiaty_7,lyr_Voting_wojewodztwa_8,group_Heatmap,group_Generation_agregate,group_Windpower,group_Solarpower,group_Oilandgaspower,group_Nuclearpower,group_Hydropower,group_Coalpower,group_Coalminenonoperating,group_Coalmineoperating,group_Cementandconcrete,group_Bioenergypower,lyr_Boundariespolslaskiesilesian_voivodeship_boundaries_23,lyr_Grid_24];
lyr_BoundariesCZK_3.set('fieldAliases', {'fid': 'fid', 'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BoundariesSVK_4.set('fieldAliases', {'fid': 'fid', 'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BoundariesPOLWojewodztwa_5.set('fieldAliases', {'fid': 'fid', 'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Voting_gminy_6.set('fieldAliases', {'fid': 'fid', 'JPT_KOD_JE': 'JPT_KOD_JE', 'JPT_NAZWA_': 'JPT_NAZWA_', 'RODZAJ': 'RODZAJ', 'Ele_win': 'Ele_win', '2024-sejmiki-po-gminach-proc_Rodzaj jednostki': '2024-sejmiki-po-gminach-proc_Rodzaj jednostki', '2024-sejmiki-po-gminach-proc_Gmina': '2024-sejmiki-po-gminach-proc_Gmina', '2024-sejmiki-po-gminach-proc_Powiat': '2024-sejmiki-po-gminach-proc_Powiat', '2024-sejmiki-po-gminach-proc_Województwo': '2024-sejmiki-po-gminach-proc_Województwo', '2024-sejmiki-po-gminach-proc_KO': '2024-sejmiki-po-gminach-proc_KO', '2024-sejmiki-po-gminach-proc_PSL': '2024-sejmiki-po-gminach-proc_PSL', '2024-sejmiki-po-gminach-proc_PiS': '2024-sejmiki-po-gminach-proc_PiS', });
lyr_Voting_powiaty_7.set('fieldAliases', {'fid': 'fid', 'JPT_KOD_JE': 'JPT_KOD_JE', 'JPT_NAZWA_': 'JPT_NAZWA_', 'RODZAJ': 'RODZAJ', 'winner': 'winner', '2024-sejmiki-po-powiatach-proc_Powiat': '2024-sejmiki-po-powiatach-proc_Powiat', '2024-sejmiki-po-powiatach-proc_Województwo': '2024-sejmiki-po-powiatach-proc_Województwo', '2024-sejmiki-po-powiatach-proc_KO': '2024-sejmiki-po-powiatach-proc_KO', '2024-sejmiki-po-powiatach-proc_PiS': '2024-sejmiki-po-powiatach-proc_PiS', });
lyr_Voting_wojewodztwa_8.set('fieldAliases', {'fid': 'fid', 'JPT_KOD_JE': 'JPT_KOD_JE', 'JPT_NAZWA_': 'JPT_NAZWA_', 'RODZAJ': 'RODZAJ', 'winner': 'winner', '2024-sejmiki-po-wojewodztwach-proc_Województwo': '2024-sejmiki-po-wojewodztwach-proc_Województwo', '2024-sejmiki-po-wojewodztwach-proc_KO': '2024-sejmiki-po-wojewodztwach-proc_KO', });
lyr_Data_agregate_log_gis_10.set('fieldAliases', {'Type': 'Type', 'Project Name': 'Project Name', 'Capacity (MW)': 'Capacity (MW)', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Log scale capacity': 'Log scale capacity', });
lyr_Windpowerplants_13.set('fieldAliases', {'Date Last Researched': 'Date Last Researched', 'Country/Area': 'Country/Area', 'Project Name': 'Project Name', 'Phase Name': 'Phase Name', 'Capacity (MW)': 'Capacity (MW)', 'Installation Type': 'Installation Type', 'Status': 'Status', 'Start year': 'Start year', 'Retired year': 'Retired year', 'Operator': 'Operator', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location accuracy': 'Location accuracy', 'City': 'City', 'Local area (taluk, county)': 'Local area (taluk, county)', 'Major area (prefecture, district)': 'Major area (prefecture, district)', 'State/Province': 'State/Province', 'Subregion': 'Subregion', 'Region': 'Region', 'GEM location ID': 'GEM location ID', 'GEM phase ID': 'GEM phase ID', 'Other IDs (location)': 'Other IDs (location)', 'Other IDs (unit/phase)': 'Other IDs (unit/phase)', 'Wiki URL': 'Wiki URL', });
lyr_Solarpowerplants_14.set('fieldAliases', {'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Date Last Researched': 'Date Last Researched', 'Country/Area': 'Country/Area', 'Project Name': 'Project Name', 'Capacity (MW)': 'Capacity (MW)', 'Capacity Rating': 'Capacity Rating', 'Technology Type': 'Technology Type', 'Status': 'Status', 'Location accuracy': 'Location accuracy', 'City': 'City', 'Local area (taluk, county)': 'Local area (taluk, county)', 'State/Province': 'State/Province', 'Subregion': 'Subregion', 'Region': 'Region', 'GEM location ID': 'GEM location ID', 'GEM phase ID': 'GEM phase ID', 'Wiki URL': 'Wiki URL', });
lyr_Oilgaspowerplants_15.set('fieldAliases', {'Wiki URL': 'Wiki URL', 'Country/Area': 'Country/Area', 'Plant name': 'Plant name', 'Other Name(s)': 'Other Name(s)', 'Unit name': 'Unit name', 'Fuel': 'Fuel', 'Capacity (MW)': 'Capacity (MW)', 'Status': 'Status', 'Turbine/Engine Technology': 'Turbine/Engine Technology', 'Equipment Manufacturer/Model': 'Equipment Manufacturer/Model', 'CHP': 'CHP', 'Hydrogen capable?': 'Hydrogen capable?', 'CCS attachment?': 'CCS attachment?', 'Conversion/replacement?': 'Conversion/replacement?', 'Conversion from/replacement of (fuel)': 'Conversion from/replacement of (fuel)', 'Conversion from/replacement of (GEM unit ID)': 'Conversion from/replacement of (GEM unit ID)', 'Start year': 'Start year', 'Owner(s)': 'Owner(s)', 'Owner(s) GEM Entity ID': 'Owner(s) GEM Entity ID', 'Parent(s)': 'Parent(s)', 'Parent GEM Entity ID': 'Parent GEM Entity ID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location accuracy': 'Location accuracy', 'City': 'City', 'Major area (prefecture, district)': 'Major area (prefecture, district)', 'State/Province': 'State/Province', 'Subregion': 'Subregion', 'Region': 'Region', 'Other IDs (location)': 'Other IDs (location)', 'Other IDs (unit)': 'Other IDs (unit)', 'GEM location ID': 'GEM location ID', 'GEM unit ID': 'GEM unit ID', 'Fuel classification?': 'Fuel classification?', });
lyr_Nuclearpowerplants_16.set('fieldAliases', {'Date Last Researched': 'Date Last Researched', 'Country/Area': 'Country/Area', 'Project Name': 'Project Name', 'Unit Name': 'Unit Name', 'Capacity (MW)': 'Capacity (MW)', 'Status': 'Status', 'Reactor Type': 'Reactor Type', 'Model': 'Model', 'Start Year': 'Start Year', 'Commercial Operation Date': 'Commercial Operation Date', 'Owner': 'Owner', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location Accuracy': 'Location Accuracy', 'City': 'City', 'State/Province': 'State/Province', 'Subregion': 'Subregion', 'Region': 'Region', 'GEM location ID': 'GEM location ID', 'GEM unit ID': 'GEM unit ID', 'Wiki URL': 'Wiki URL', });
lyr_Hydroelectricpowerplants_17.set('fieldAliases', {'Date Last Researched': 'Date Last Researched', 'Country/Area 1': 'Country/Area 1', 'Project Name': 'Project Name', 'Other name(s)': 'Other name(s)', 'Capacity (MW)': 'Capacity (MW)', 'Binational': 'Binational', 'Country/Area 1 Capacity (MW)': 'Country/Area 1 Capacity (MW)', 'Status': 'Status', 'Start Year': 'Start Year', 'Owner': 'Owner', 'Technology Type': 'Technology Type', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location Accuracy': 'Location Accuracy', 'Local Area 1': 'Local Area 1', 'State/Province 1': 'State/Province 1', 'Subregion 1': 'Subregion 1', 'Region 1': 'Region 1', 'GEM location ID': 'GEM location ID', 'GEM unit ID': 'GEM unit ID', 'Wiki URL': 'Wiki URL', });
lyr_Coalpowerplants_18.set('fieldAliases', {'GEM unit/phase ID': 'GEM unit/phase ID', 'GEM location ID': 'GEM location ID', 'Country/Area': 'Country/Area', 'Wiki URL': 'Wiki URL', 'Plant name': 'Plant name', 'Unit name': 'Unit name', 'Plant name (other)': 'Plant name (other)', 'Plant name (local)': 'Plant name (local)', 'Owner': 'Owner', 'Owner GEM Entity ID': 'Owner GEM Entity ID', 'Parent': 'Parent', 'Parent GEM Entity ID': 'Parent GEM Entity ID', 'Capacity (MW)': 'Capacity (MW)', 'Status': 'Status', 'Start year': 'Start year', 'Retired year': 'Retired year', 'Planned retirement': 'Planned retirement', 'Coal phaseout year': 'Coal phaseout year', 'Net zero year': 'Net zero year', 'Combustion technology': 'Combustion technology', 'Coal type': 'Coal type', 'Coal source': 'Coal source', 'Conversion to (fuel)': 'Conversion to (fuel)', 'Conversion to (GEM unit ID)': 'Conversion to (GEM unit ID)', 'Alternate Fuel': 'Alternate Fuel', 'Location': 'Location', 'Local area (taluk, county)': 'Local area (taluk, county)', 'Major area (prefecture, district)': 'Major area (prefecture, district)', 'Subnational unit (province, state)': 'Subnational unit (province, state)', 'Subregion': 'Subregion', 'Region': 'Region', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location accuracy': 'Location accuracy', 'Captive': 'Captive', 'Captive industry use': 'Captive industry use', 'CHP': 'CHP', 'Capacity factor': 'Capacity factor', 'Plant age (years)': 'Plant age (years)', 'Heat rate (Btu per kWh)': 'Heat rate (Btu per kWh)', 'Emission factor (kg of CO2 per TJ)': 'Emission factor (kg of CO2 per TJ)', 'Annual CO2 (million tonnes / annum)': 'Annual CO2 (million tonnes / annum)', 'Remaining plant lifetime (years)': 'Remaining plant lifetime (years)', 'Lifetime CO2 (million tonnes)': 'Lifetime CO2 (million tonnes)', });
lyr_Coalminesnonoperating_19.set('fieldAliases', {'GEM Mine ID': 'GEM Mine ID', 'Country / Area': 'Country / Area', 'Mine Name': 'Mine Name', 'Mine Name AKAs': 'Mine Name AKAs', 'Mine Name (Non-ENG)': 'Mine Name (Non-ENG)', 'Owners': 'Owners', 'Parent Company': 'Parent Company', 'Company HQs': 'Company HQs', 'Capacity (Mtpa)': 'Capacity (Mtpa)', 'Production (Mtpa)': 'Production (Mtpa)', 'Year of Production': 'Year of Production', 'Mine Type': 'Mine Type', 'Mining Method': 'Mining Method', 'Mine Size (Km2)': 'Mine Size (Km2)', 'Mine Depth (m)': 'Mine Depth (m)', 'Depth Accuracy': 'Depth Accuracy', 'Workforce Size': 'Workforce Size', 'Workforce Accuracy': 'Workforce Accuracy', 'Coal Type': 'Coal Type', 'Coal Grade': 'Coal Grade', 'Opening Year': 'Opening Year', 'Closing Year': 'Closing Year', 'Reason for Closure': 'Reason for Closure', 'Mine Site Status': 'Mine Site Status', 'Coalfield': 'Coalfield', 'Location': 'Location', 'Prefecture, District': 'Prefecture, District', 'State, Province': 'State, Province', 'Subregion': 'Subregion', 'Region': 'Region', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location Accuracy': 'Location Accuracy', 'Reported Coal Mine Methane Emissions (thousand tonnes per year)': 'Reported Coal Mine Methane Emissions (thousand tonnes per year)', });
lyr_Coalminesoperating_20.set('fieldAliases', {'GEM Mine ID': 'GEM Mine ID', 'Country / Area': 'Country / Area', 'Mine Name': 'Mine Name', 'Mine Name AKAs': 'Mine Name AKAs', 'GEM Wiki Page (ENG)': 'GEM Wiki Page (ENG)', 'Status': 'Status', 'Owners': 'Owners', 'GEM Entity ID': 'GEM Entity ID', 'Owners (Non-ENG)': 'Owners (Non-ENG)', 'Parent Company': 'Parent Company', 'GEM Entity ID_1': 'GEM Entity ID_1', 'Company HQs': 'Company HQs', 'Capacity (Mtpa)': 'Capacity (Mtpa)', 'Production (Mtpa)': 'Production (Mtpa)', 'Year of Production': 'Year of Production', 'Mine Type': 'Mine Type', 'Mining Method': 'Mining Method', 'Mine Size (Km2)': 'Mine Size (Km2)', 'Mine Depth (m)': 'Mine Depth (m)', 'Depth Accuracy': 'Depth Accuracy', 'Workforce Size': 'Workforce Size', 'Workforce Accuracy': 'Workforce Accuracy', 'Coal Type': 'Coal Type', 'Coal Grade': 'Coal Grade', 'Total Reserves (Proven and Probable, Mt)': 'Total Reserves (Proven and Probable, Mt)', 'Year of Total Reserves Recorded': 'Year of Total Reserves Recorded', 'Total Resource (Inferred, Indicated, Measured)': 'Total Resource (Inferred, Indicated, Measured)', 'Reserve to Production Ratio (R/P)': 'Reserve to Production Ratio (R/P)', 'Opening Year': 'Opening Year', 'Closing Year': 'Closing Year', 'Reported Life of Mine': 'Reported Life of Mine', 'Reported Year of Mine Life': 'Reported Year of Mine Life', 'Coalfield': 'Coalfield', 'Location': 'Location', 'State, Province': 'State, Province', 'Subregion': 'Subregion', 'Region': 'Region', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location Accuracy': 'Location Accuracy', 'Reported Coal Mine Methane Emissions (thousand tonnes per year)': 'Reported Coal Mine Methane Emissions (thousand tonnes per year)', 'Year of Reported Coal Mine Methane Emissions': 'Year of Reported Coal Mine Methane Emissions', 'Has associated CMM mitigation data': 'Has associated CMM mitigation data', 'GEM Coal Mine Methane Emissions Estimate (MCM/yr)': 'GEM Coal Mine Methane Emissions Estimate (MCM/yr)', 'GEM Coal Mine Methane Emissions Estimate (M tonnes/yr)': 'GEM Coal Mine Methane Emissions Estimate (M tonnes/yr)', 'Methane Gas Content (m^3/tonne) (Updated)': 'Methane Gas Content (m^3/tonne) (Updated)', 'Methane Emissions Factor (Updated)': 'Methane Emissions Factor (Updated)', 'CMM Emissions (CO2e 20 years)': 'CMM Emissions (CO2e 20 years)', 'CMM Emissions (CO2e 100 years)': 'CMM Emissions (CO2e 100 years)', 'ISO Code': 'ISO Code', });
lyr_Cementconcreteplants_21.set('fieldAliases', {'GEM Plant ID': 'GEM Plant ID', 'GEM Asset name (English)': 'GEM Asset name (English)', 'Asset name (other language)': 'Asset name (other language)', 'Alternative asset name(s)': 'Alternative asset name(s)', 'SFI ID': 'SFI ID', 'LeadIT Project ID': 'LeadIT Project ID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Coordinate accuracy': 'Coordinate accuracy', 'GEM wiki page': 'GEM wiki page', 'Municipality': 'Municipality', 'Subnational unit': 'Subnational unit', 'Country/Area': 'Country/Area', 'Cement Capacity (millions metric tonnes per annum)': 'Cement Capacity (millions metric tonnes per annum)', 'Clinker Capacity (millions metric tonnes per annum)': 'Clinker Capacity (millions metric tonnes per annum)', 'Majority Cement Type': 'Majority Cement Type', 'Cement Color': 'Cement Color', 'Operating status': 'Operating status', 'Start date': 'Start date', 'Owner name (English)': 'Owner name (English)', 'Owner name (other language)': 'Owner name (other language)', 'Owner Entity ID': 'Owner Entity ID', 'Parent': 'Parent', 'Parent Entity ID': 'Parent Entity ID', 'Plant type': 'Plant type', 'Production type': 'Production type', 'CCS/CCUS': 'CCS/CCUS', 'Alternative Fuel': 'Alternative Fuel', 'Clay Calcination': 'Clay Calcination', 'field_30': 'field_30', 'field_31': 'field_31', 'field_32': 'field_32', 'field_33': 'field_33', 'field_34': 'field_34', 'field_35': 'field_35', 'field_36': 'field_36', 'field_37': 'field_37', 'field_38': 'field_38', 'field_39': 'field_39', 'field_40': 'field_40', 'field_41': 'field_41', 'field_42': 'field_42', });
lyr_Bioenergypowerplants_22.set('fieldAliases', {'Date last researched': 'Date last researched', 'Country/Area': 'Country/Area', 'Project Name': 'Project Name', 'Unit Name': 'Unit Name', 'Other Name(s)': 'Other Name(s)', 'Capacity (MW)': 'Capacity (MW)', 'Fuel': 'Fuel', 'Status': 'Status', 'Conversion/Replacement?': 'Conversion/Replacement?', 'Unit Conversion Year': 'Unit Conversion Year', 'Start Year': 'Start Year', 'Operator(s)': 'Operator(s)', 'Operator(s) GEM Entity ID': 'Operator(s) GEM Entity ID', 'Owner(s)': 'Owner(s)', 'Owner Name(s) in Local Language / Script': 'Owner Name(s) in Local Language / Script', 'Owner(s) GEM Entity ID': 'Owner(s) GEM Entity ID', 'Parent(s)': 'Parent(s)', 'Parent(s) GEM Entity ID': 'Parent(s) GEM Entity ID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location Accuracy': 'Location Accuracy', 'City': 'City', 'Major Area (prefecture, district)': 'Major Area (prefecture, district)', 'State/Province': 'State/Province', 'Subregion': 'Subregion', 'Region': 'Region', 'GEM location ID': 'GEM location ID', 'GEM phase ID': 'GEM phase ID', 'Wiki URL': 'Wiki URL', });
lyr_Boundariespolslaskiesilesian_voivodeship_boundaries_23.set('fieldAliases', {'fid': 'fid', 'JPT_KOD_JE': 'JPT_KOD_JE', 'JPT_NAZWA_': 'JPT_NAZWA_', 'RODZAJ': 'RODZAJ', });
lyr_Grid_24.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_BoundariesCZK_3.set('fieldImages', {'fid': 'TextEdit', 'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_BoundariesSVK_4.set('fieldImages', {'fid': 'TextEdit', 'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_BoundariesPOLWojewodztwa_5.set('fieldImages', {'fid': 'TextEdit', 'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Voting_gminy_6.set('fieldImages', {'fid': 'TextEdit', 'JPT_KOD_JE': 'TextEdit', 'JPT_NAZWA_': 'TextEdit', 'RODZAJ': 'TextEdit', 'Ele_win': 'TextEdit', '2024-sejmiki-po-gminach-proc_Rodzaj jednostki': 'TextEdit', '2024-sejmiki-po-gminach-proc_Gmina': 'TextEdit', '2024-sejmiki-po-gminach-proc_Powiat': 'TextEdit', '2024-sejmiki-po-gminach-proc_Województwo': 'TextEdit', '2024-sejmiki-po-gminach-proc_KO': 'TextEdit', '2024-sejmiki-po-gminach-proc_PSL': 'TextEdit', '2024-sejmiki-po-gminach-proc_PiS': 'TextEdit', });
lyr_Voting_powiaty_7.set('fieldImages', {'fid': 'TextEdit', 'JPT_KOD_JE': 'TextEdit', 'JPT_NAZWA_': 'TextEdit', 'RODZAJ': 'TextEdit', 'winner': 'TextEdit', '2024-sejmiki-po-powiatach-proc_Powiat': 'TextEdit', '2024-sejmiki-po-powiatach-proc_Województwo': 'TextEdit', '2024-sejmiki-po-powiatach-proc_KO': 'TextEdit', '2024-sejmiki-po-powiatach-proc_PiS': 'TextEdit', });
lyr_Voting_wojewodztwa_8.set('fieldImages', {'fid': 'TextEdit', 'JPT_KOD_JE': 'TextEdit', 'JPT_NAZWA_': 'TextEdit', 'RODZAJ': 'TextEdit', 'winner': 'TextEdit', '2024-sejmiki-po-wojewodztwach-proc_Województwo': 'TextEdit', '2024-sejmiki-po-wojewodztwach-proc_KO': 'TextEdit', });
lyr_Data_agregate_log_gis_10.set('fieldImages', {'Type': 'TextEdit', 'Project Name': 'TextEdit', 'Capacity (MW)': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Log scale capacity': 'TextEdit', });
lyr_Windpowerplants_13.set('fieldImages', {'Date Last Researched': 'DateTime', 'Country/Area': 'TextEdit', 'Project Name': 'TextEdit', 'Phase Name': 'Range', 'Capacity (MW)': 'Range', 'Installation Type': 'TextEdit', 'Status': 'TextEdit', 'Start year': 'Range', 'Retired year': 'TextEdit', 'Operator': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location accuracy': 'TextEdit', 'City': 'TextEdit', 'Local area (taluk, county)': 'TextEdit', 'Major area (prefecture, district)': 'TextEdit', 'State/Province': 'TextEdit', 'Subregion': 'TextEdit', 'Region': 'TextEdit', 'GEM location ID': 'TextEdit', 'GEM phase ID': 'TextEdit', 'Other IDs (location)': 'TextEdit', 'Other IDs (unit/phase)': 'TextEdit', 'Wiki URL': 'TextEdit', });
lyr_Solarpowerplants_14.set('fieldImages', {'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Date Last Researched': 'DateTime', 'Country/Area': 'TextEdit', 'Project Name': 'TextEdit', 'Capacity (MW)': 'TextEdit', 'Capacity Rating': 'TextEdit', 'Technology Type': 'TextEdit', 'Status': 'TextEdit', 'Location accuracy': 'TextEdit', 'City': 'TextEdit', 'Local area (taluk, county)': 'TextEdit', 'State/Province': 'TextEdit', 'Subregion': 'TextEdit', 'Region': 'TextEdit', 'GEM location ID': 'TextEdit', 'GEM phase ID': 'TextEdit', 'Wiki URL': 'TextEdit', });
lyr_Oilgaspowerplants_15.set('fieldImages', {'Wiki URL': 'TextEdit', 'Country/Area': 'TextEdit', 'Plant name': 'TextEdit', 'Other Name(s)': 'TextEdit', 'Unit name': 'TextEdit', 'Fuel': 'TextEdit', 'Capacity (MW)': 'Range', 'Status': 'TextEdit', 'Turbine/Engine Technology': 'TextEdit', 'Equipment Manufacturer/Model': 'TextEdit', 'CHP': 'CheckBox', 'Hydrogen capable?': 'TextEdit', 'CCS attachment?': 'TextEdit', 'Conversion/replacement?': 'TextEdit', 'Conversion from/replacement of (fuel)': 'TextEdit', 'Conversion from/replacement of (GEM unit ID)': 'TextEdit', 'Start year': 'TextEdit', 'Owner(s)': 'TextEdit', 'Owner(s) GEM Entity ID': 'TextEdit', 'Parent(s)': 'TextEdit', 'Parent GEM Entity ID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location accuracy': 'TextEdit', 'City': 'TextEdit', 'Major area (prefecture, district)': 'TextEdit', 'State/Province': 'TextEdit', 'Subregion': 'TextEdit', 'Region': 'TextEdit', 'Other IDs (location)': 'TextEdit', 'Other IDs (unit)': 'TextEdit', 'GEM location ID': 'TextEdit', 'GEM unit ID': 'TextEdit', 'Fuel classification?': 'TextEdit', });
lyr_Nuclearpowerplants_16.set('fieldImages', {'Date Last Researched': 'DateTime', 'Country/Area': 'TextEdit', 'Project Name': 'TextEdit', 'Unit Name': 'Range', 'Capacity (MW)': 'Range', 'Status': 'TextEdit', 'Reactor Type': 'TextEdit', 'Model': 'TextEdit', 'Start Year': 'Range', 'Commercial Operation Date': 'Range', 'Owner': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location Accuracy': 'TextEdit', 'City': 'TextEdit', 'State/Province': 'TextEdit', 'Subregion': 'TextEdit', 'Region': 'TextEdit', 'GEM location ID': 'TextEdit', 'GEM unit ID': 'TextEdit', 'Wiki URL': 'TextEdit', });
lyr_Hydroelectricpowerplants_17.set('fieldImages', {'Date Last Researched': 'Range', 'Country/Area 1': 'TextEdit', 'Project Name': 'TextEdit', 'Other name(s)': 'TextEdit', 'Capacity (MW)': 'Range', 'Binational': 'CheckBox', 'Country/Area 1 Capacity (MW)': 'Range', 'Status': 'TextEdit', 'Start Year': 'Range', 'Owner': 'TextEdit', 'Technology Type': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location Accuracy': 'TextEdit', 'Local Area 1': 'TextEdit', 'State/Province 1': 'TextEdit', 'Subregion 1': 'TextEdit', 'Region 1': 'TextEdit', 'GEM location ID': 'TextEdit', 'GEM unit ID': 'TextEdit', 'Wiki URL': 'TextEdit', });
lyr_Coalpowerplants_18.set('fieldImages', {'GEM unit/phase ID': 'TextEdit', 'GEM location ID': 'TextEdit', 'Country/Area': 'TextEdit', 'Wiki URL': 'TextEdit', 'Plant name': 'TextEdit', 'Unit name': 'TextEdit', 'Plant name (other)': 'TextEdit', 'Plant name (local)': 'TextEdit', 'Owner': 'TextEdit', 'Owner GEM Entity ID': 'TextEdit', 'Parent': 'TextEdit', 'Parent GEM Entity ID': 'TextEdit', 'Capacity (MW)': 'TextEdit', 'Status': 'TextEdit', 'Start year': 'Range', 'Retired year': 'Range', 'Planned retirement': 'Range', 'Coal phaseout year': 'Range', 'Net zero year': 'Range', 'Combustion technology': 'TextEdit', 'Coal type': 'TextEdit', 'Coal source': 'TextEdit', 'Conversion to (fuel)': 'TextEdit', 'Conversion to (GEM unit ID)': 'TextEdit', 'Alternate Fuel': 'TextEdit', 'Location': 'TextEdit', 'Local area (taluk, county)': 'TextEdit', 'Major area (prefecture, district)': 'TextEdit', 'Subnational unit (province, state)': 'TextEdit', 'Subregion': 'TextEdit', 'Region': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location accuracy': 'TextEdit', 'Captive': 'TextEdit', 'Captive industry use': 'TextEdit', 'CHP': 'CheckBox', 'Capacity factor': 'TextEdit', 'Plant age (years)': 'Range', 'Heat rate (Btu per kWh)': 'TextEdit', 'Emission factor (kg of CO2 per TJ)': 'Range', 'Annual CO2 (million tonnes / annum)': 'TextEdit', 'Remaining plant lifetime (years)': 'Range', 'Lifetime CO2 (million tonnes)': 'TextEdit', });
lyr_Coalminesnonoperating_19.set('fieldImages', {'GEM Mine ID': 'TextEdit', 'Country / Area': 'TextEdit', 'Mine Name': 'TextEdit', 'Mine Name AKAs': 'TextEdit', 'Mine Name (Non-ENG)': 'TextEdit', 'Owners': 'TextEdit', 'Parent Company': 'TextEdit', 'Company HQs': 'TextEdit', 'Capacity (Mtpa)': 'TextEdit', 'Production (Mtpa)': 'TextEdit', 'Year of Production': 'Range', 'Mine Type': 'TextEdit', 'Mining Method': 'TextEdit', 'Mine Size (Km2)': 'TextEdit', 'Mine Depth (m)': 'Range', 'Depth Accuracy': 'TextEdit', 'Workforce Size': 'Range', 'Workforce Accuracy': 'TextEdit', 'Coal Type': 'TextEdit', 'Coal Grade': 'TextEdit', 'Opening Year': 'Range', 'Closing Year': 'Range', 'Reason for Closure': 'TextEdit', 'Mine Site Status': 'TextEdit', 'Coalfield': 'TextEdit', 'Location': 'TextEdit', 'Prefecture, District': 'TextEdit', 'State, Province': 'TextEdit', 'Subregion': 'TextEdit', 'Region': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location Accuracy': 'TextEdit', 'Reported Coal Mine Methane Emissions (thousand tonnes per year)': 'TextEdit', });
lyr_Coalminesoperating_20.set('fieldImages', {'GEM Mine ID': 'TextEdit', 'Country / Area': 'TextEdit', 'Mine Name': 'TextEdit', 'Mine Name AKAs': 'TextEdit', 'GEM Wiki Page (ENG)': 'TextEdit', 'Status': 'TextEdit', 'Owners': 'TextEdit', 'GEM Entity ID': 'TextEdit', 'Owners (Non-ENG)': 'TextEdit', 'Parent Company': 'TextEdit', 'GEM Entity ID_1': 'TextEdit', 'Company HQs': 'TextEdit', 'Capacity (Mtpa)': 'TextEdit', 'Production (Mtpa)': 'TextEdit', 'Year of Production': 'Range', 'Mine Type': 'TextEdit', 'Mining Method': 'TextEdit', 'Mine Size (Km2)': 'TextEdit', 'Mine Depth (m)': 'Range', 'Depth Accuracy': 'TextEdit', 'Workforce Size': 'Range', 'Workforce Accuracy': 'TextEdit', 'Coal Type': 'TextEdit', 'Coal Grade': 'TextEdit', 'Total Reserves (Proven and Probable, Mt)': 'TextEdit', 'Year of Total Reserves Recorded': 'Range', 'Total Resource (Inferred, Indicated, Measured)': 'TextEdit', 'Reserve to Production Ratio (R/P)': 'Range', 'Opening Year': 'Range', 'Closing Year': 'Range', 'Reported Life of Mine': 'TextEdit', 'Reported Year of Mine Life': 'TextEdit', 'Coalfield': 'TextEdit', 'Location': 'TextEdit', 'State, Province': 'TextEdit', 'Subregion': 'TextEdit', 'Region': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location Accuracy': 'TextEdit', 'Reported Coal Mine Methane Emissions (thousand tonnes per year)': 'TextEdit', 'Year of Reported Coal Mine Methane Emissions': 'Range', 'Has associated CMM mitigation data': 'CheckBox', 'GEM Coal Mine Methane Emissions Estimate (MCM/yr)': 'TextEdit', 'GEM Coal Mine Methane Emissions Estimate (M tonnes/yr)': 'TextEdit', 'Methane Gas Content (m^3/tonne) (Updated)': 'TextEdit', 'Methane Emissions Factor (Updated)': 'TextEdit', 'CMM Emissions (CO2e 20 years)': 'TextEdit', 'CMM Emissions (CO2e 100 years)': 'TextEdit', 'ISO Code': 'Range', });
lyr_Cementconcreteplants_21.set('fieldImages', {'GEM Plant ID': 'TextEdit', 'GEM Asset name (English)': 'TextEdit', 'Asset name (other language)': 'TextEdit', 'Alternative asset name(s)': 'TextEdit', 'SFI ID': 'TextEdit', 'LeadIT Project ID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Coordinate accuracy': 'TextEdit', 'GEM wiki page': 'TextEdit', 'Municipality': 'TextEdit', 'Subnational unit': 'TextEdit', 'Country/Area': 'TextEdit', 'Cement Capacity (millions metric tonnes per annum)': 'TextEdit', 'Clinker Capacity (millions metric tonnes per annum)': 'TextEdit', 'Majority Cement Type': 'TextEdit', 'Cement Color': 'TextEdit', 'Operating status': 'TextEdit', 'Start date': 'Range', 'Owner name (English)': 'TextEdit', 'Owner name (other language)': 'TextEdit', 'Owner Entity ID': 'TextEdit', 'Parent': 'TextEdit', 'Parent Entity ID': 'TextEdit', 'Plant type': 'TextEdit', 'Production type': 'TextEdit', 'CCS/CCUS': 'TextEdit', 'Alternative Fuel': 'TextEdit', 'Clay Calcination': 'TextEdit', 'field_30': 'TextEdit', 'field_31': 'TextEdit', 'field_32': 'TextEdit', 'field_33': 'TextEdit', 'field_34': 'TextEdit', 'field_35': 'TextEdit', 'field_36': 'TextEdit', 'field_37': 'TextEdit', 'field_38': 'TextEdit', 'field_39': 'TextEdit', 'field_40': 'TextEdit', 'field_41': 'TextEdit', 'field_42': 'TextEdit', });
lyr_Bioenergypowerplants_22.set('fieldImages', {'Date last researched': 'Range', 'Country/Area': 'TextEdit', 'Project Name': 'TextEdit', 'Unit Name': 'TextEdit', 'Other Name(s)': 'TextEdit', 'Capacity (MW)': 'TextEdit', 'Fuel': 'TextEdit', 'Status': 'TextEdit', 'Conversion/Replacement?': 'TextEdit', 'Unit Conversion Year': 'Range', 'Start Year': 'Range', 'Operator(s)': 'TextEdit', 'Operator(s) GEM Entity ID': 'TextEdit', 'Owner(s)': 'TextEdit', 'Owner Name(s) in Local Language / Script': 'TextEdit', 'Owner(s) GEM Entity ID': 'TextEdit', 'Parent(s)': 'TextEdit', 'Parent(s) GEM Entity ID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location Accuracy': 'TextEdit', 'City': 'TextEdit', 'Major Area (prefecture, district)': 'TextEdit', 'State/Province': 'TextEdit', 'Subregion': 'TextEdit', 'Region': 'TextEdit', 'GEM location ID': 'TextEdit', 'GEM phase ID': 'TextEdit', 'Wiki URL': 'TextEdit', });
lyr_Boundariespolslaskiesilesian_voivodeship_boundaries_23.set('fieldImages', {'fid': 'TextEdit', 'JPT_KOD_JE': 'TextEdit', 'JPT_NAZWA_': 'TextEdit', 'RODZAJ': 'TextEdit', });
lyr_Grid_24.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_BoundariesCZK_3.set('fieldLabels', {'fid': 'no label', 'shapeName': 'no label', 'shapeISO': 'no label', 'shapeID': 'no label', 'shapeGroup': 'no label', 'shapeType': 'no label', });
lyr_BoundariesSVK_4.set('fieldLabels', {'fid': 'no label', 'shapeName': 'no label', 'shapeISO': 'no label', 'shapeID': 'no label', 'shapeGroup': 'no label', 'shapeType': 'no label', });
lyr_BoundariesPOLWojewodztwa_5.set('fieldLabels', {'fid': 'no label', 'shapeName': 'no label', 'shapeISO': 'no label', 'shapeID': 'no label', 'shapeGroup': 'no label', 'shapeType': 'no label', });
lyr_Voting_gminy_6.set('fieldLabels', {'fid': 'no label', 'JPT_KOD_JE': 'no label', 'JPT_NAZWA_': 'no label', 'RODZAJ': 'no label', 'Ele_win': 'inline label - visible with data', '2024-sejmiki-po-gminach-proc_Rodzaj jednostki': 'inline label - visible with data', '2024-sejmiki-po-gminach-proc_Gmina': 'inline label - visible with data', '2024-sejmiki-po-gminach-proc_Powiat': 'inline label - visible with data', '2024-sejmiki-po-gminach-proc_Województwo': 'inline label - visible with data', '2024-sejmiki-po-gminach-proc_KO': 'inline label - visible with data', '2024-sejmiki-po-gminach-proc_PSL': 'inline label - visible with data', '2024-sejmiki-po-gminach-proc_PiS': 'inline label - visible with data', });
lyr_Voting_powiaty_7.set('fieldLabels', {'fid': 'no label', 'JPT_KOD_JE': 'no label', 'JPT_NAZWA_': 'no label', 'RODZAJ': 'no label', 'winner': 'inline label - visible with data', '2024-sejmiki-po-powiatach-proc_Powiat': 'inline label - visible with data', '2024-sejmiki-po-powiatach-proc_Województwo': 'inline label - visible with data', '2024-sejmiki-po-powiatach-proc_KO': 'inline label - visible with data', '2024-sejmiki-po-powiatach-proc_PiS': 'inline label - visible with data', });
lyr_Voting_wojewodztwa_8.set('fieldLabels', {'fid': 'no label', 'JPT_KOD_JE': 'no label', 'JPT_NAZWA_': 'no label', 'RODZAJ': 'no label', 'winner': 'inline label - visible with data', '2024-sejmiki-po-wojewodztwach-proc_Województwo': 'inline label - visible with data', '2024-sejmiki-po-wojewodztwach-proc_KO': 'inline label - visible with data', });
lyr_Data_agregate_log_gis_10.set('fieldLabels', {'Type': 'inline label - visible with data', 'Project Name': 'inline label - visible with data', 'Capacity (MW)': 'inline label - visible with data', 'Latitude': 'no label', 'Longitude': 'no label', 'Log scale capacity': 'inline label - visible with data', });
lyr_Windpowerplants_13.set('fieldLabels', {'Date Last Researched': 'no label', 'Country/Area': 'no label', 'Project Name': 'inline label - visible with data', 'Phase Name': 'inline label - visible with data', 'Capacity (MW)': 'inline label - visible with data', 'Installation Type': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Start year': 'inline label - visible with data', 'Retired year': 'inline label - visible with data', 'Operator': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Location accuracy': 'no label', 'City': 'inline label - visible with data', 'Local area (taluk, county)': 'inline label - visible with data', 'Major area (prefecture, district)': 'inline label - visible with data', 'State/Province': 'inline label - visible with data', 'Subregion': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'GEM location ID': 'no label', 'GEM phase ID': 'no label', 'Other IDs (location)': 'no label', 'Other IDs (unit/phase)': 'no label', 'Wiki URL': 'inline label - visible with data', });
lyr_Solarpowerplants_14.set('fieldLabels', {'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Date Last Researched': 'no label', 'Country/Area': 'inline label - visible with data', 'Project Name': 'inline label - visible with data', 'Capacity (MW)': 'inline label - visible with data', 'Capacity Rating': 'inline label - visible with data', 'Technology Type': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Location accuracy': 'no label', 'City': 'inline label - visible with data', 'Local area (taluk, county)': 'inline label - visible with data', 'State/Province': 'inline label - visible with data', 'Subregion': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'GEM location ID': 'no label', 'GEM phase ID': 'no label', 'Wiki URL': 'inline label - visible with data', });
lyr_Oilgaspowerplants_15.set('fieldLabels', {'Wiki URL': 'inline label - visible with data', 'Country/Area': 'no label', 'Plant name': 'inline label - visible with data', 'Other Name(s)': 'no label', 'Unit name': 'inline label - visible with data', 'Fuel': 'inline label - visible with data', 'Capacity (MW)': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Turbine/Engine Technology': 'inline label - visible with data', 'Equipment Manufacturer/Model': 'inline label - visible with data', 'CHP': 'no label', 'Hydrogen capable?': 'no label', 'CCS attachment?': 'no label', 'Conversion/replacement?': 'no label', 'Conversion from/replacement of (fuel)': 'no label', 'Conversion from/replacement of (GEM unit ID)': 'no label', 'Start year': 'inline label - visible with data', 'Owner(s)': 'inline label - visible with data', 'Owner(s) GEM Entity ID': 'no label', 'Parent(s)': 'inline label - visible with data', 'Parent GEM Entity ID': 'no label', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Location accuracy': 'no label', 'City': 'inline label - visible with data', 'Major area (prefecture, district)': 'inline label - visible with data', 'State/Province': 'inline label - visible with data', 'Subregion': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Other IDs (location)': 'no label', 'Other IDs (unit)': 'no label', 'GEM location ID': 'no label', 'GEM unit ID': 'no label', 'Fuel classification?': 'no label', });
lyr_Nuclearpowerplants_16.set('fieldLabels', {'Date Last Researched': 'no label', 'Country/Area': 'no label', 'Project Name': 'inline label - visible with data', 'Unit Name': 'inline label - visible with data', 'Capacity (MW)': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Reactor Type': 'inline label - visible with data', 'Model': 'inline label - visible with data', 'Start Year': 'inline label - visible with data', 'Commercial Operation Date': 'inline label - visible with data', 'Owner': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Location Accuracy': 'no label', 'City': 'inline label - visible with data', 'State/Province': 'inline label - visible with data', 'Subregion': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'GEM location ID': 'no label', 'GEM unit ID': 'no label', 'Wiki URL': 'inline label - visible with data', });
lyr_Hydroelectricpowerplants_17.set('fieldLabels', {'Date Last Researched': 'no label', 'Country/Area 1': 'no label', 'Project Name': 'inline label - visible with data', 'Other name(s)': 'no label', 'Capacity (MW)': 'inline label - visible with data', 'Binational': 'no label', 'Country/Area 1 Capacity (MW)': 'no label', 'Status': 'inline label - visible with data', 'Start Year': 'no label', 'Owner': 'inline label - visible with data', 'Technology Type': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Location Accuracy': 'no label', 'Local Area 1': 'inline label - visible with data', 'State/Province 1': 'inline label - visible with data', 'Subregion 1': 'inline label - visible with data', 'Region 1': 'inline label - visible with data', 'GEM location ID': 'no label', 'GEM unit ID': 'no label', 'Wiki URL': 'inline label - visible with data', });
lyr_Coalpowerplants_18.set('fieldLabels', {'GEM unit/phase ID': 'no label', 'GEM location ID': 'no label', 'Country/Area': 'no label', 'Wiki URL': 'inline label - visible with data', 'Plant name': 'inline label - visible with data', 'Unit name': 'inline label - visible with data', 'Plant name (other)': 'no label', 'Plant name (local)': 'no label', 'Owner': 'inline label - visible with data', 'Owner GEM Entity ID': 'no label', 'Parent': 'inline label - visible with data', 'Parent GEM Entity ID': 'no label', 'Capacity (MW)': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Start year': 'inline label - visible with data', 'Retired year': 'inline label - visible with data', 'Planned retirement': 'inline label - visible with data', 'Coal phaseout year': 'inline label - visible with data', 'Net zero year': 'inline label - visible with data', 'Combustion technology': 'inline label - visible with data', 'Coal type': 'inline label - visible with data', 'Coal source': 'inline label - visible with data', 'Conversion to (fuel)': 'inline label - visible with data', 'Conversion to (GEM unit ID)': 'no label', 'Alternate Fuel': 'inline label - visible with data', 'Location': 'no label', 'Local area (taluk, county)': 'inline label - visible with data', 'Major area (prefecture, district)': 'inline label - visible with data', 'Subnational unit (province, state)': 'inline label - visible with data', 'Subregion': 'no label', 'Region': 'no label', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Location accuracy': 'no label', 'Captive': 'inline label - visible with data', 'Captive industry use': 'inline label - always visible', 'CHP': 'no label', 'Capacity factor': 'no label', 'Plant age (years)': 'no label', 'Heat rate (Btu per kWh)': 'inline label - visible with data', 'Emission factor (kg of CO2 per TJ)': 'inline label - visible with data', 'Annual CO2 (million tonnes / annum)': 'inline label - visible with data', 'Remaining plant lifetime (years)': 'inline label - visible with data', 'Lifetime CO2 (million tonnes)': 'inline label - visible with data', });
lyr_Coalminesnonoperating_19.set('fieldLabels', {'GEM Mine ID': 'no label', 'Country / Area': 'no label', 'Mine Name': 'inline label - visible with data', 'Mine Name AKAs': 'inline label - visible with data', 'Mine Name (Non-ENG)': 'no label', 'Owners': 'inline label - visible with data', 'Parent Company': 'inline label - visible with data', 'Company HQs': 'no label', 'Capacity (Mtpa)': 'inline label - visible with data', 'Production (Mtpa)': 'inline label - visible with data', 'Year of Production': 'no label', 'Mine Type': 'inline label - visible with data', 'Mining Method': 'inline label - visible with data', 'Mine Size (Km2)': 'inline label - visible with data', 'Mine Depth (m)': 'inline label - visible with data', 'Depth Accuracy': 'no label', 'Workforce Size': 'inline label - visible with data', 'Workforce Accuracy': 'no label', 'Coal Type': 'inline label - visible with data', 'Coal Grade': 'inline label - visible with data', 'Opening Year': 'inline label - visible with data', 'Closing Year': 'inline label - visible with data', 'Reason for Closure': 'inline label - visible with data', 'Mine Site Status': 'inline label - visible with data', 'Coalfield': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'Prefecture, District': 'inline label - visible with data', 'State, Province': 'inline label - visible with data', 'Subregion': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Location Accuracy': 'no label', 'Reported Coal Mine Methane Emissions (thousand tonnes per year)': 'inline label - visible with data', });
lyr_Coalminesoperating_20.set('fieldLabels', {'GEM Mine ID': 'no label', 'Country / Area': 'no label', 'Mine Name': 'inline label - visible with data', 'Mine Name AKAs': 'inline label - visible with data', 'GEM Wiki Page (ENG)': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Owners': 'inline label - visible with data', 'GEM Entity ID': 'no label', 'Owners (Non-ENG)': 'no label', 'Parent Company': 'inline label - visible with data', 'GEM Entity ID_1': 'no label', 'Company HQs': 'no label', 'Capacity (Mtpa)': 'inline label - visible with data', 'Production (Mtpa)': 'inline label - visible with data', 'Year of Production': 'no label', 'Mine Type': 'inline label - visible with data', 'Mining Method': 'inline label - visible with data', 'Mine Size (Km2)': 'inline label - visible with data', 'Mine Depth (m)': 'inline label - visible with data', 'Depth Accuracy': 'no label', 'Workforce Size': 'inline label - visible with data', 'Workforce Accuracy': 'no label', 'Coal Type': 'inline label - visible with data', 'Coal Grade': 'inline label - visible with data', 'Total Reserves (Proven and Probable, Mt)': 'inline label - visible with data', 'Year of Total Reserves Recorded': 'inline label - visible with data', 'Total Resource (Inferred, Indicated, Measured)': 'inline label - visible with data', 'Reserve to Production Ratio (R/P)': 'no label', 'Opening Year': 'inline label - visible with data', 'Closing Year': 'inline label - visible with data', 'Reported Life of Mine': 'no label', 'Reported Year of Mine Life': 'no label', 'Coalfield': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'State, Province': 'inline label - visible with data', 'Subregion': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Location Accuracy': 'no label', 'Reported Coal Mine Methane Emissions (thousand tonnes per year)': 'inline label - visible with data', 'Year of Reported Coal Mine Methane Emissions': 'no label', 'Has associated CMM mitigation data': 'no label', 'GEM Coal Mine Methane Emissions Estimate (MCM/yr)': 'inline label - visible with data', 'GEM Coal Mine Methane Emissions Estimate (M tonnes/yr)': 'inline label - visible with data', 'Methane Gas Content (m^3/tonne) (Updated)': 'inline label - visible with data', 'Methane Emissions Factor (Updated)': 'no label', 'CMM Emissions (CO2e 20 years)': 'inline label - visible with data', 'CMM Emissions (CO2e 100 years)': 'inline label - visible with data', 'ISO Code': 'no label', });
lyr_Cementconcreteplants_21.set('fieldLabels', {'GEM Plant ID': 'no label', 'GEM Asset name (English)': 'no label', 'Asset name (other language)': 'no label', 'Alternative asset name(s)': 'no label', 'SFI ID': 'no label', 'LeadIT Project ID': 'no label', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Coordinate accuracy': 'no label', 'GEM wiki page': 'inline label - visible with data', 'Municipality': 'inline label - visible with data', 'Subnational unit': 'no label', 'Country/Area': 'inline label - visible with data', 'Cement Capacity (millions metric tonnes per annum)': 'inline label - visible with data', 'Clinker Capacity (millions metric tonnes per annum)': 'inline label - visible with data', 'Majority Cement Type': 'inline label - visible with data', 'Cement Color': 'inline label - visible with data', 'Operating status': 'inline label - visible with data', 'Start date': 'no label', 'Owner name (English)': 'inline label - visible with data', 'Owner name (other language)': 'no label', 'Owner Entity ID': 'no label', 'Parent': 'inline label - visible with data', 'Parent Entity ID': 'no label', 'Plant type': 'inline label - visible with data', 'Production type': 'inline label - visible with data', 'CCS/CCUS': 'inline label - visible with data', 'Alternative Fuel': 'inline label - visible with data', 'Clay Calcination': 'no label', 'field_30': 'no label', 'field_31': 'no label', 'field_32': 'no label', 'field_33': 'no label', 'field_34': 'no label', 'field_35': 'no label', 'field_36': 'no label', 'field_37': 'no label', 'field_38': 'no label', 'field_39': 'no label', 'field_40': 'no label', 'field_41': 'no label', 'field_42': 'no label', });
lyr_Bioenergypowerplants_22.set('fieldLabels', {'Date last researched': 'no label', 'Country/Area': 'no label', 'Project Name': 'inline label - visible with data', 'Unit Name': 'inline label - visible with data', 'Other Name(s)': 'no label', 'Capacity (MW)': 'inline label - visible with data', 'Fuel': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Conversion/Replacement?': 'inline label - visible with data', 'Unit Conversion Year': 'inline label - visible with data', 'Start Year': 'no label', 'Operator(s)': 'inline label - visible with data', 'Operator(s) GEM Entity ID': 'no label', 'Owner(s)': 'inline label - visible with data', 'Owner Name(s) in Local Language / Script': 'no label', 'Owner(s) GEM Entity ID': 'no label', 'Parent(s)': 'inline label - visible with data', 'Parent(s) GEM Entity ID': 'no label', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Location Accuracy': 'no label', 'City': 'inline label - visible with data', 'Major Area (prefecture, district)': 'inline label - visible with data', 'State/Province': 'inline label - visible with data', 'Subregion': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'GEM location ID': 'no label', 'GEM phase ID': 'no label', 'Wiki URL': 'inline label - visible with data', });
lyr_Boundariespolslaskiesilesian_voivodeship_boundaries_23.set('fieldLabels', {'fid': 'no label', 'JPT_KOD_JE': 'no label', 'JPT_NAZWA_': 'no label', 'RODZAJ': 'no label', });
lyr_Grid_24.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Grid_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});