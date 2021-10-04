'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">app-material documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4870aeeb9fe2a4a7fefa5cb71581c744"' : 'data-target="#xs-components-links-module-AppModule-4870aeeb9fe2a4a7fefa5cb71581c744"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4870aeeb9fe2a4a7fefa5cb71581c744"' :
                                            'id="xs-components-links-module-AppModule-4870aeeb9fe2a4a7fefa5cb71581c744"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-d92f25caabc8da6ea6fe617e6563ca36"' : 'data-target="#xs-components-links-module-CoreModule-d92f25caabc8da6ea6fe617e6563ca36"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-d92f25caabc8da6ea6fe617e6563ca36"' :
                                            'id="xs-components-links-module-CoreModule-d92f25caabc8da6ea6fe617e6563ca36"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormListModule.html" data-type="entity-link" >FormListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormListModule-4224feb436f0fca95d6ca9c74ee1aff7"' : 'data-target="#xs-components-links-module-FormListModule-4224feb436f0fca95d6ca9c74ee1aff7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormListModule-4224feb436f0fca95d6ca9c74ee1aff7"' :
                                            'id="xs-components-links-module-FormListModule-4224feb436f0fca95d6ca9c74ee1aff7"' }>
                                            <li class="link">
                                                <a href="components/FormListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormListRoutingModule.html" data-type="entity-link" >FormListRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormViewModule.html" data-type="entity-link" >FormViewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormViewModule-c6c04b7a444a7394c17368effebbc94b"' : 'data-target="#xs-components-links-module-FormViewModule-c6c04b7a444a7394c17368effebbc94b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormViewModule-c6c04b7a444a7394c17368effebbc94b"' :
                                            'id="xs-components-links-module-FormViewModule-c6c04b7a444a7394c17368effebbc94b"' }>
                                            <li class="link">
                                                <a href="components/FormViewChildComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormViewChildComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormViewRoutingModule.html" data-type="entity-link" >FormViewRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LandingPageModule.html" data-type="entity-link" >LandingPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LandingPageModule-9fef60cade2b706424d303d2f978934c"' : 'data-target="#xs-components-links-module-LandingPageModule-9fef60cade2b706424d303d2f978934c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LandingPageModule-9fef60cade2b706424d303d2f978934c"' :
                                            'id="xs-components-links-module-LandingPageModule-9fef60cade2b706424d303d2f978934c"' }>
                                            <li class="link">
                                                <a href="components/LandingPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LandingPageRoutingModule.html" data-type="entity-link" >LandingPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SearchModule.html" data-type="entity-link" >SearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchModule-6318bd0b1d7cdaccafc6a2baceb8fdd2"' : 'data-target="#xs-components-links-module-SearchModule-6318bd0b1d7cdaccafc6a2baceb8fdd2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchModule-6318bd0b1d7cdaccafc6a2baceb8fdd2"' :
                                            'id="xs-components-links-module-SearchModule-6318bd0b1d7cdaccafc6a2baceb8fdd2"' }>
                                            <li class="link">
                                                <a href="components/SearchBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-8967e6970bc16a3f9441de09fe3fbb29"' : 'data-target="#xs-pipes-links-module-SharedModule-8967e6970bc16a3f9441de09fe3fbb29"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-8967e6970bc16a3f9441de09fe3fbb29"' :
                                            'id="xs-pipes-links-module-SharedModule-8967e6970bc16a3f9441de09fe3fbb29"' }>
                                            <li class="link">
                                                <a href="pipes/StateCodePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StateCodePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/FormsDataSource.html" data-type="entity-link" >FormsDataSource</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApplicationEventService.html" data-type="entity-link" >ApplicationEventService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormSearchService.html" data-type="entity-link" >FormSearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormViewOverlayService.html" data-type="entity-link" >FormViewOverlayService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/FormSearchRequest.html" data-type="entity-link" >FormSearchRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormSearchResponse.html" data-type="entity-link" >FormSearchResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormSearchResult.html" data-type="entity-link" >FormSearchResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormViewOverlayEvent.html" data-type="entity-link" >FormViewOverlayEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchedForm.html" data-type="entity-link" >SearchedForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectedForm.html" data-type="entity-link" >SelectedForm</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});