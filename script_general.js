(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer"],"id":"rootPlayer","start":"this.init()","data":{"locales":{"pt":"locale/pt.txt"},"history":{},"defaultLocale":"pt","name":"Player3000","displayTooltipInTouchScreens":true,"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"rate":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1}},"backgroundColor":["#FFFFFF"],"hash": "7e0f2fd9281900ea53fffab6d81ec8d714c6a3d9d2a41f8a39a52c47e66045f4", "definitions": [{"enterPointingToHorizon":true,"class":"RotationalCamera","id":"media_78419F67_77B2_F7DD_41DA_7F0D8573AF40_camera","initialPosition":{"pitch":0,"hfov":120,"class":"RotationalCameraPosition","yaw":0}},{"viewerArea":"this.MainViewer","displayPlaybackBar":true,"arrowKeysAction":"translate","class":"PanoramaPlayer","touchControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","aaEnabled":true},{"class":"Video360","hfov":360,"vfov":180,"id":"media_78419F67_77B2_F7DD_41DA_7F0D8573AF40","thumbnailUrl":"media/media_78419F67_77B2_F7DD_41DA_7F0D8573AF40_t.webp","pitch":0,"video":["this.videores_66FA6195_778E_CB72_419F_0B78A62C7675","this.videores_6628F194_7792_CB72_41C6_923A34FB16B7"],"data":{"label":"V_VisaoGeralInterno_MQ_3"},"hfovMin":60,"label":trans('media_78419F67_77B2_F7DD_41DA_7F0D8573AF40.label'),"hfovMax":140},{"progressBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","toolTipPaddingBottom":4,"width":"100%","progressBorderSize":0,"toolTipShadowColor":"#333138","toolTipFontSize":"1.11vmin","progressBarBorderRadius":2,"playbackBarHeight":10,"subtitlesTextShadowColor":"#000000","progressBarBorderSize":0,"subtitlesBottom":50,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"subtitlesFontSize":"3vmin","progressHeight":2,"data":{"name":"Main Viewer"},"playbackBarBackgroundColorDirection":"vertical","firstTransitionDuration":0,"subtitlesFontColor":"#FFFFFF","vrThumbstickRotationStep":20,"playbackBarBackgroundColor":["#FFFFFF"],"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"playbackBarRight":0,"progressBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"progressLeft":"33%","propagateClick":false,"playbackBarHeadShadowOpacity":0.7,"toolTipPaddingRight":6,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"toolTipFontFamily":"Arial","toolTipFontColor":"#606060","playbackBarProgressBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","playbackBarBorderRadius":0,"playbackBarHeadShadowVerticalLength":0,"playbackBarHeadShadowHorizontalLength":0,"vrPointerSelectionTime":2000,"playbackBarHeadBorderRadius":0,"subtitlesFontFamily":"Arial","playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarBorderSize":0,"toolTipTextShadowColor":"#000000","id":"MainViewer","toolTipPaddingLeft":6,"playbackBarHeadShadowBlurRadius":3,"playbackBarBackgroundOpacity":1,"progressBackgroundColorRatios":[0],"progressRight":"33%","toolTipBorderColor":"#767676","progressOpacity":0.7,"subtitlesTextShadowOpacity":1,"playbackBarHeadHeight":15,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","class":"ViewerArea","progressBarBackgroundColorDirection":"horizontal","minHeight":50,"progressBarBorderColor":"#000000","vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"progressBarBackgroundColorRatios":[0],"playbackBarHeadBorderSize":0,"minWidth":100,"playbackBarHeadShadow":true,"progressBarBackgroundColor":["#3399FF"],"toolTipPaddingTop":4,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBackgroundColor":["#000000"],"height":"100%","playbackBarBottom":5,"progressBottom":10,"subtitlesTop":0},{"id":"mainPlayList","items":[{"camera":"this.media_78419F67_77B2_F7DD_41DA_7F0D8573AF40_camera","media":"this.media_78419F67_77B2_F7DD_41DA_7F0D8573AF40","class":"Video360PlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.MainViewerPanoramaPlayer.set('displayPlayOverlay', false); this.MainViewerPanoramaPlayer.set('clickAction', 'none'); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)"}],"class":"PlayList"},{"height":1920,"codec":"h264","class":"Video360Resource","bitrate":9996,"posterURL":trans('videores_66FA6195_778E_CB72_419F_0B78A62C7675.posterURL'),"type":"video/mp4","url":trans('videores_66FA6195_778E_CB72_419F_0B78A62C7675.url'),"id":"videores_66FA6195_778E_CB72_419F_0B78A62C7675","width":3840,"framerate":29.97},{"height":3840,"codec":"h265","class":"Video360Resource","bitrate":9996,"posterURL":trans('videores_6628F194_7792_CB72_41C6_923A34FB16B7.posterURL'),"type":"video/mp4","url":trans('videores_6628F194_7792_CB72_41C6_923A34FB16B7.url'),"id":"videores_6628F194_7792_CB72_41C6_923A34FB16B7","width":7680,"framerate":29.97}],"layout":"absolute","watermark":false,"backgroundColorRatios":[0],"class":"Player","propagateClick":false,"gap":10,"minHeight":0,"minWidth":0,"scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"height":"100%","scrollBarColor":"#000000","width":"100%","scripts":{"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"shareSocial":TDV.Tour.Script.shareSocial,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"historyGoBack":TDV.Tour.Script.historyGoBack,"clone":TDV.Tour.Script.clone,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"executeJS":TDV.Tour.Script.executeJS,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"openLink":TDV.Tour.Script.openLink,"historyGoForward":TDV.Tour.Script.historyGoForward,"setValue":TDV.Tour.Script.setValue,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"cloneBindings":TDV.Tour.Script.cloneBindings,"getOverlays":TDV.Tour.Script.getOverlays,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPixels":TDV.Tour.Script.getPixels,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"initAnalytics":TDV.Tour.Script.initAnalytics,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"resumePlayers":TDV.Tour.Script.resumePlayers,"showWindowBase":TDV.Tour.Script.showWindowBase,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setMapLocation":TDV.Tour.Script.setMapLocation,"getKey":TDV.Tour.Script.getKey,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"enableVR":TDV.Tour.Script.enableVR,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"initQuiz":TDV.Tour.Script.initQuiz,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"playAudioList":TDV.Tour.Script.playAudioList,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"init":TDV.Tour.Script.init,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"disableVR":TDV.Tour.Script.disableVR,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getComponentByName":TDV.Tour.Script.getComponentByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"isPanorama":TDV.Tour.Script.isPanorama,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizFinish":TDV.Tour.Script.quizFinish,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"downloadFile":TDV.Tour.Script.downloadFile,"showPopupImage":TDV.Tour.Script.showPopupImage,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"createTween":TDV.Tour.Script.createTween,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"textToSpeech":TDV.Tour.Script.textToSpeech,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"toggleVR":TDV.Tour.Script.toggleVR,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"mixObject":TDV.Tour.Script.mixObject,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMainViewer":TDV.Tour.Script.getMainViewer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showWindow":TDV.Tour.Script.showWindow,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"translate":TDV.Tour.Script.translate,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"registerKey":TDV.Tour.Script.registerKey,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"unregisterKey":TDV.Tour.Script.unregisterKey,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizStart":TDV.Tour.Script.quizStart,"existsKey":TDV.Tour.Script.existsKey,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"unloadViewer":TDV.Tour.Script.unloadViewer,"startMeasurement":TDV.Tour.Script.startMeasurement,"setLocale":TDV.Tour.Script.setLocale}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.0.6, Fri Apr 10 2026