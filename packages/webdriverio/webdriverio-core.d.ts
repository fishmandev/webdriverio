// -------------------- ATTENTION --------------------
// Do not edit this file as it gets auto-generated!
// For edits modify /scripts/templates/*.tpl.d.ts
// Check CONTRIBUTING.md for more details.
// --------------------------------------------------
//
/// <reference types="node"/>
/// <reference types="webdriver"/>

declare namespace WebdriverIO {
    type LocationParam = 'x' | 'y';

    interface LocationReturn {
        x: number,
        y: number
    }

    type SizeParam = 'width' | 'height';

    interface SizeReturn {
        width: number,
        height: number
    }

    interface CSSProperty {
        property: string;
        value: any;
        parsed?: {
            // other
            unit?: string;
            // font-family
            value?: any;
            string: string;
            // color
            hex?: string;
            alpha?: number;
            type?: string;
            rgba?: string
        }
    }

    interface MultiRemoteCapabilities {
        [instanceName: string]: {
            capabilities: WebDriver.DesiredCapabilities;
        };
    }

    interface ServiceOption {
        [key: string]: any;
    }
    interface ServiceWithOption extends Array<string|ServiceOption>{ 0: string; 1: ServiceOption }
    type ServiceEntry = string | HookFunctions | [string, ServiceOption]

    interface Options {
        /**
         * Define the protocol you want to use for your browser automation.
         * Currently only [`webdriver`](https://www.npmjs.com/package/webdriver) and
         * [`devtools`](https://www.npmjs.com/package/devtools) are supported,
         * as these are the main browser automation technologies available.
         */
        automationProtocol?: string;
        runner?: string;
        /**
         * Your cloud service username (only works for Sauce Labs, Browserstack, TestingBot,
         * CrossBrowserTesting or LambdaTest accounts). If set, WebdriverIO will automatically
         * set connection options for you.
         */
        user?: string;
        /**
         * Your cloud service access key or secret key (only works for Sauce Labs, Browserstack,
         * TestingBot, CrossBrowserTesting or LambdaTest accounts). If set, WebdriverIO will
         * automatically set connection options for you.
         */
        key?: string;
        /**
         * If running on Sauce Labs, you can choose to run tests between different datacenters:
         * US or EU. To change your region to EU, add region: 'eu' to your config.
         */
        region?: string;
        /**
         * Sauce Labs provides a headless offering that allows you to run Chrome and Firefox tests headless.
         */
        headless?: string;
        /**
         * Define specs for test execution.
         */
        specs?: string[];
        /**
         * Exclude specs from test execution.
         */
        exclude?: string[];
        /**
         * An object describing various of suites, which you can then specify
         * with the --suite option on the wdio CLI.
         */
        suites?: object;
        /**
         * Maximum number of total parallel running workers.
         */
        maxInstances?: number;
        /**
         * Maximum number of total parallel running workers per capability.
         */
        maxInstancesPerCapability?: number;
        capabilities?: WebDriver.DesiredCapabilities[] | MultiRemoteCapabilities;
        /**
         * Directory to store all testrunner log files (including reporter logs and wdio logs).
         * If not set, all logs are streamed to stdout. Since most reporters are made to log to
         * stdout, it is recommended to only use this option for specific reporters where it
         * makes more sense to push report into a file (like the junit reporter, for example).
         *
         * When running in standalone mode, the only log generated by WebdriverIO will be the wdio log.
         */
        outputDir?: string;
        /**
         * Shorten url command calls by setting a base URL.
         */
        baseUrl?: string;
        /**
         * If you want your test run to stop after a specific number of test failures, use bail.
         * (It defaults to 0, which runs all tests no matter what.) Note: Please be aware that
         * when using a third party test runner (such as Mocha), additional configuration might
         * be required.
         */
        bail?: number;
        /**
         * The number of retry attempts for an entire specfile when it fails as a whole.
         */
        specFileRetries?: number;
        readonly specFileRetryAttempts?: number;
        /**
         * Default timeout for all `waitFor*` commands. (Note the lowercase f in the option name.)
         * This timeout only affects commands starting with `waitFor*` and their default wait time.
         */
        waitforTimeout?: number;
        /**
         * Default interval for all `waitFor*` commands to check if an expected state (e.g.,
         * visibility) has been changed.
         */
        waitforInterval?: number;
        /**
         * Defines the test framework to be used by the WDIO testrunner.
         */
        framework?: string;
        /**
         * List of reporters to use. A reporter can be either a string, or an array of
         * `['reporterName', { <reporter options> }]` where the first element is a string
         * with the reporter name and the second element an object with reporter options.
         */
        reporters?: (string | object)[];
        /**
         * Determines in which interval the reporter should check if they are synchronised
         * if they report their logs asynchronously (e.g. if logs are streamed to a 3rd
         * party vendor).
         */
        reporterSyncInterval?: number;
        /**
         * Determines the maximum time reporters have to finish uploading all their logs
         * until an error is being thrown by the testrunner.
         */
        reporterSyncTimeout?: number;
        /**
         * Services take over a specific job you don't want to take care of. They enhance
         * your test setup with almost no effort.
         */
        services?: ServiceEntry[];
        /**
         * Node arguments to specify when launching child processes.
         */
        execArgv?: string[];
    }

    interface RemoteOptions extends WebDriver.Options, Omit<Options, 'capabilities'> { }

    interface MultiRemoteOptions {
        [instanceName: string]: WebDriver.DesiredCapabilities;
    }

    interface Suite {}
    interface Test {}

    interface Results {
        finished: number,
        passed: number,
        failed: number
    }

    interface HookFunctions {
        /**
         * Gets executed once before all workers get launched.
         * @param config        wdio configuration object
         * @param capabilities  list of capabilities details
         */
        onPrepare?(
            config: Config,
            capabilities: WebDriver.DesiredCapabilities[]
        ): void;

        /**
         * Gets executed before a worker process is spawned and can be used to initialise specific service
         * for that worker as well as modify runtime environments in an async fashion.
         * @param cid       capability id (e.g 0-0)
         * @param caps      object containing capabilities for session that will be spawn in the worker
         * @param specs     specs to be run in the worker process
         * @param args      object that will be merged with the main configuration once worker is initialised
         * @param execArgv  list of string arguments passed to the worker process
         */
        onWorkerStart?(
            cid: string,
            caps: WebDriver.DesiredCapabilities,
            specs: string[],
            args: Config,
            execArgv: string[]
        ): void;

        /**
         * Gets executed after all workers got shut down and the process is about to exit. An error
         * thrown in the onComplete hook will result in the test run failing.
         * @param exitCode      runner exit code
         * @param config        wdio configuration object
         * @param capabilities  list of capabilities details
         * @param results       test results
         */
        onComplete?(
            exitCode: number,
            config: Config,
            capabilities: WebDriver.DesiredCapabilities,
            results: Results
        ): void;

        /**
         * Gets executed when a refresh happens.
         * @param oldSessionId session id of old session
         * @param newSessionId session id of new session
         */
        onReload?(
            oldSessionId: string,
            newSessionId: string
        ): void;

        /**
         * Gets executed before test execution begins. At this point you can access to all global
         * variables like `browser`. It is the perfect place to define custom commands.
         * @param capabilities  list of capabilities details
         * @param specs         specs to be run in the worker process
         */
        before?(
            capabilities: WebDriver.DesiredCapabilities,
            specs: string[]
        ): void;

        /**
         * Runs before a WebdriverIO command gets executed.
         * @param commandName command name
         * @param args        arguments that command would receive
         */
        beforeCommand?(
            commandName: string,
            args: any[]
        ): void;

        /**
         * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
         * beforeEach in Mocha). `stepData` and `world` are Cucumber framework specific properties.
         * @param test      details to current running test (or step in Cucumber)
         * @param context   context to current running test
         * @param stepData  Cucumber step data
         * @param world     Cucumber world
         */
        beforeHook?(test: any, context: any, stepData?: any, world?: any): void;

        /**
         * Gets executed just before initialising the webdriver session and test framework. It allows you
         * to manipulate configurations depending on the capability or spec.
         * @param config        wdio configuration object
         * @param capabilities  list of capabilities details
         * @param specs         list of spec file paths that are to be run
         */
        beforeSession?(
            config: Config,
            capabilities: WebDriver.DesiredCapabilities,
            specs: string[]
        ): void;

        /**
         * Hook that gets executed before the suite starts.
         * @param suite suite details
         */
        beforeSuite?(suite: Suite): void;

        /**
         * Function to be executed before a test (in Mocha/Jasmine) starts.
         * @param test      details to current running test (or step in Cucumber)
         * @param context   context to current running test
         */
        beforeTest?(test: Test, context: any): void;

        /**
         * Hook that gets executed _after_ a hook within the suite ends (e.g. runs after calling
         * afterEach in Mocha). `stepData` and `world` are Cucumber framework specific.
         * @param test      details to current running test (or step in Cucumber)
         * @param context   context to current running test
         * @param result    test result
         * @param stepData  Cucumber step data
         * @param world     Cucumber world
         */
        afterHook?(test: any, context: any, result: {
            error?: any,
            result?: any,
            passed: boolean,
            duration: number,
            retries: { limit: number, attempts: number }
        }, stepData?: any, world?: any): void;

        /**
         * Gets executed after all tests are done. You still have access to all global variables from
         * the test.
         * @param result        number of total failing tests
         * @param capabilities  list of capabilities details
         * @param specs         list of spec file paths that are to be run
         */
        after?(
            result: number,
            capabilities: WebDriver.DesiredCapabilities,
            specs: string[]
        ): void;

        /**
         * Runs after a WebdriverIO command gets executed
         * @param commandName  command name
         * @param args         arguments that command would receive
         * @param result       result of the command
         * @param error        error in case something went wrong
         */
        afterCommand?(
            commandName: string,
            args: any[],
            result: any,
            error?: Error
        ): void;

        /**
         * Gets executed right after terminating the webdriver session.
         * @param config        wdio configuration object
         * @param capabilities  list of capabilities details
         * @param specs         list of spec file paths that are to be run
         */
        afterSession?(
            config: Config,
            capabilities: WebDriver.DesiredCapabilities,
            specs: string[]
        ): void;

        /**
         * Hook that gets executed after the suite has ended
         * @param suite suite details
         */
        afterSuite?(suite: Suite): void;

        /**
         * Function to be executed after a test (in Mocha/Jasmine) ends.
         * @param test      details to current running test (or step in Cucumber)
         * @param context   context to current running test
         * @param result    test result
         */
        afterTest?(test: Test, context: any, result: {
            error?: any,
            result?: any,
            passed: boolean,
            duration: number,
            retries: { limit: number, attempts: number }
        }): void;
    }
    type _HooksArray = {
        [K in keyof Pick<HookFunctions, "onPrepare" | "onWorkerStart" | "onComplete" | "before" | "after" | "beforeSession" | "afterSession">]: HookFunctions[K] | Array<HookFunctions[K]>;
    };
    type _Hooks = Omit<HookFunctions, "onPrepare" | "onWorkerStart" | "onComplete" | "before" | "after" | "beforeSession" | "afterSession">;
    interface Hooks extends _HooksArray, _Hooks { }

    type ActionTypes = 'press' | 'longPress' | 'tap' | 'moveTo' | 'wait' | 'release';
    interface TouchAction {
        action: ActionTypes,
        x?: number,
        y?: number,
        element?: Element,
        ms?: number
    }
    type TouchActions = string | TouchAction | TouchAction[];

    type WaitForOptions = {
        timeout?: number,
        interval?: number,
        timeoutMsg?: string,
        reverse?: boolean,
    }

    type Matcher = {
        name: string,
        args: Array<string | object>
        class?: string
    }

    type ReactSelectorOptions = {
        props?: object,
        state?: any[] | number | string | object | boolean
    }

    type MoveToOptions = {
        xOffset?: number,
        yOffset?: number
    }

    type DragAndDropOptions = {
        duration?: number
    }

    type NewWindowOptions = {
        windowName?: string,
        windowFeatures?: string
    }

    type ClickOptions = {
        button?: number | string,
        x?: number,
        y?: number
    }

    type WaitUntilOptions = {
        timeout?: number,
        timeoutMsg?: string,
        interval?: number
    }

    type DragAndDropCoordinate = {
        x: number,
        y: number
    }

    interface Element {
        selector: string;
        elementId: string;

        /**
         * w3c
         */
        "element-6066-11e4-a52e-4f735466cecf"?: string;

        /**
         * jsonwp
         */
        ELEMENT?: string;

        /**
         * index in array of elements
         * only applicable if the element found with `$$` command
         */
        index?: number;

        /**
         * WebdriverIO.Element or WebdriverIO.BrowserObject
         */
        parent: Element | WebdriverIO.BrowserObject;

        /**
         * add command to `element` scope
         */
        addCommand(
            name: string,
            func: Function
        ): void;
        
        /**
         * The `$$` command is a short way to call the [`findElements`](/docs/api/webdriver.html#findelements) command in order
         * to fetch multiple elements on the page similar to the `$$` command from the browser scope. The difference when calling
         * it from an element scope is that the driver will look within the children of that element.
         */
        $$(
            selector: string | Function | Matcher
        ): Promise<ElementArray>;

        /**
         * The `$` command is a short way to call the [`findElement`](/docs/api/webdriver.html#findelement) command in order
         * to fetch a single element on the page similar to the `$` command from the browser scope. The difference when calling
         * it from an element scope is that the driver will look within the children of that element. You can also pass in an object as selector
         * where the object contains a property `element-6066-11e4-a52e-4f735466cecf` with the value of a reference
         * to an element. The command will then transform the reference to an extended WebdriverIO element.
         */
        $(
            selector: string | Function | Matcher
        ): Promise<Element>;

        /**
         * Add a value to an object found by given selector. You can also use unicode
         * characters like Left arrow or Back space. WebdriverIO will take care of
         * translating them into unicode characters. You’ll find all supported characters
         * [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions).
         * To do that, the value has to correspond to a key from the table.
         */
        addValue(
            value: string | number | boolean | object | any[]
        ): Promise<void>;

        /**
         * Clear a `<textarea>` or text `<input>` element’s value. Make sure you can interact with the
         * element before using this command. You can't clear an input element that is disabled or in
         * readonly mode.
         */
        clearValue(): Promise<void>;

        /**
         * Click on an element.
         */
        click(
            options?: ClickOptions
        ): Promise<void>;

        /**
         * The `customs$$` allows you to use a custom strategy declared by using `browser.addLocatorStrategy`
         */
        custom$$(
            strategyName: string,
            strategyArguments: any
        ): Promise<ElementArray>;

        /**
         * The `custom$` allows you to use a custom strategy declared by using `browser.addLocatorStrategy`
         */
        custom$(
            strategyName: string,
            strategyArguments: any
        ): Promise<Element>;

        /**
         * Double-click on an element.
         */
        doubleClick(): Promise<void>;

        /**
         * Drag an item to a destination element.
         */
        dragAndDrop(
            target: Element | DragAndDropCoordinate,
            options?: DragAndDropOptions
        ): Promise<void>;

        /**
         * Get an attribute from a DOM-element based on the attribute name.
         */
        getAttribute(
            attributeName: string
        ): Promise<string>;

        /**
         * Get a css property from a DOM-element selected by given selector. The return value
         * is formatted to be testable. Colors gets parsed via [rgb2hex](https://www.npmjs.org/package/rgb2hex)
         * and all other properties get parsed via [css-value](https://www.npmjs.org/package/css-value).
         */
        getCSSProperty(
            cssProperty: string
        ): Promise<CSSProperty>;

        /**
         * Get source code of specified DOM element by selector.
         */
        getHTML(
            includeSelectorTag?: boolean
        ): Promise<string>;

        /**
         * Determine an element’s location on the page.
         */
        getLocation(
            prop: LocationParam
        ): Promise<number>;

        /**
         * Determine an element’s location on the page.
         */
        getLocation(): Promise<LocationReturn>;

        /**
         * The Get Element Property command will return the result of getting a property of an element.
         */
        getProperty(
            property: string
        ): Promise<object | string | boolean | number>;

        /**
         * Get the width and height for an DOM-element.
         */
        getSize(
            prop: SizeParam
        ): Promise<number>;

        /**
         * Get the width and height for an DOM-element.
         */
        getSize(): Promise<SizeReturn>;

        /**
         * Get tag name of a DOM-element.
         */
        getTagName(): Promise<string>;

        /**
         * Get the text content from a DOM-element. Make sure the element
         * you want to request the text from [is interactable](http://www.w3.org/TR/webdriver/#interactable)
         * otherwise you will get an empty string as return value. If the element is disabled or not
         * visible and you still want to receive the text content use [getHTML](https://webdriver.io/docs/api/element/getHTML.html)
         * as a workaround.
         */
        getText(): Promise<string>;

        /**
         * Get the value of a `<textarea>`, `<select>` or text `<input>` found by given selector.
         * If multiple elements are found via the given selector, an array of values is returned instead.
         * For input with checkbox or radio type use isSelected.
         */
        getValue(): Promise<string>;

        /**
         * Return true if the selected DOM-element:
         * - exists;
         * - is visible;
         * - is within viewport (if not try scroll to it);
         * - its center is not overlapped with another element;
         * - is not disabled.
         */
        isClickable(): Promise<boolean>;

        /**
         * Return true if the selected DOM-element is displayed.
         */
        isDisplayed(): Promise<boolean>;

        /**
         * Return true if the selected DOM-element found by given selector is partially visible and within the viewport.
         */
        isDisplayedInViewport(): Promise<boolean>;

        /**
         * Return true or false if the selected DOM-element is enabled.
         */
        isEnabled(): Promise<boolean>;

        /**
         * Return true if the selected element matches with the provided one.
         */
        isEqual(
            el: Element
        ): Promise<boolean>;

        /**
         * Returns true if element exists in the DOM
         */
        isExisting(): Promise<boolean>;

        /**
         * Return true or false if the selected DOM-element currently has focus. If the selector matches
         * multiple elements, it will return true if one of the elements has focus.
         */
        isFocused(): Promise<boolean>;

        /**
         * Will return true or false whether or not an `<option>` or `<input>` element of type
         * checkbox or radio is currently selected.
         */
        isSelected(): Promise<boolean>;

        /**
         * Move the mouse by an offset of the specified element. If no element is specified,
         * the move is relative to the current mouse cursor. If an element is provided but
         * no offset, the mouse will be moved to the center of the element. If the element
         * is not visible, it will be scrolled into view.
         */
        moveTo(
            options?: MoveToOptions
        ): Promise<void>;

        /**
         * The `react$$` command is a useful command to query multiple React Components
         * by their actual name and filter them by props and state.
         */
        react$$(
            selector: string,
            options?: ReactSelectorOptions
        ): Promise<ElementArray>;

        /**
         * The `react$` command is a useful command to query React Components by their
         * actual name and filter them by props and state.
         */
        react$(
            selector: string,
            options?: ReactSelectorOptions
        ): Promise<Element>;

        /**
         * Save a screenshot of an element to a PNG file on your OS.
         */
        saveScreenshot(
            filename: string
        ): Promise<Buffer>;

        /**
         * Scroll element into viewport ([MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)).
         */
        scrollIntoView(
            scrollIntoViewOptions?: object | boolean
        ): Promise<void>;

        /**
         * Select option with a specific value.
         */
        selectByAttribute(
            attribute: string,
            value: string
        ): Promise<void>;

        /**
         * Select option with a specific index.
         */
        selectByIndex(
            index: number
        ): Promise<void>;

        /**
         * Select option with displayed text matching the argument.
         */
        selectByVisibleText(
            text: string
        ): Promise<void>;

        /**
         * Send a sequence of key strokes to an element (clears value before). If the element
         * doesn't need to be cleared first then use addValue. You can also use
         * unicode characters like Left arrow or Back space. WebdriverIO will take care of
         * translating them into unicode characters. You’ll find all supported characters
         * [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions).
         * To do that, the value has to correspond to a key from the table.
         */
        setValue(
            value: string | number | boolean | object | any[]
        ): Promise<void>;

        /**
         * Access elements inside a given element's shadowRoot
         */
        shadow$$(
            selector: string | Function
        ): Promise<ElementArray>;

        /**
         * Access an element inside a given element's shadowRoot
         */
        shadow$(
            selector: string | Function
        ): Promise<Element>;

        /**
         * The Touch Action API provides the basis of all gestures that can be automated in Appium.
         * It is currently only available to native apps and can not be used to interact with webapps.
         * At its core is the ability to chain together _ad hoc_ individual actions, which will then be
         * applied to an element in the application on the device. The basic actions that can be used are:
         */
        touchAction(
            action: TouchActions
        ): Promise<void>;

        /**
         * Wait for an element for the provided amount of
         * milliseconds to be clickable or not clickable.
         */
        waitForClickable(
            options?: WaitForOptions
        ): Promise<boolean>;

        /**
         * Wait for an element for the provided amount of
         * milliseconds to be displayed or not displayed.
         */
        waitForDisplayed(
            options?: WaitForOptions
        ): Promise<boolean>;

        /**
         * Wait for an element (selected by css selector) for the provided amount of
         * milliseconds to be (dis/en)abled. If multiple elements get queried by given
         * selector, it returns true if at least one element is (dis/en)abled.
         */
        waitForEnabled(
            options?: WaitForOptions
        ): Promise<boolean>;

        /**
         * Wait for an element for the provided amount of
         * milliseconds to be present within the DOM. Returns true if the selector
         * matches at least one element that exists in the DOM, otherwise throws an
         * error. If the reverse flag is true, the command will instead return true
         * if the selector does not match any elements.
         */
        waitForExist(
            options?: WaitForOptions
        ): Promise<boolean>;

        /**
         * This wait command is your universal weapon if you want to wait on something. It expects a condition
         * and waits until that condition is fulfilled with a truthy value. If you use the WDIO testrunner the
         * commands within the condition are getting executed synchronously like in your test.
         */
        waitUntil(
            condition: () => Promise<Boolean>,
            options?: WaitUntilOptions
        ): Promise<boolean>;
    }

    interface ElementArray extends Array<Element> {
        selector: string | Function;
        parent: Element | WebdriverIO.BrowserObject;
        foundWith: string;
        props: any[];
    }

    interface Timeouts {
        implicit?: number,
        pageLoad?: number,
        script?: number
    }

    interface Browser {
        config: Config;
        options: RemoteOptions;

        /**
         * add command to `browser` or `element` scope
         */
        addCommand(
            name: string,
            func: Function,
            attachToElement?: boolean
        ): void;

        /**
         * overwrite `browser` or `element` command
         */
        overwriteCommand(
            name: string,
            func: (origCommand: Function, ...args: any[]) => any,
            attachToElement?: boolean
        ): void;

        /**
         * create custom selector
         */
        addLocatorStrategy(
            name: string,
            func: (elementFetchingMethod: (selector: string) => any) => void
        ): void
        
        /**
         * The `$$` command is a short way to call the [`findElements`](/docs/api/webdriver.html#findelements) command in order
         * to fetch multiple elements on the page. It returns an array with element results that will have an
         * extended prototype to call action commands without passing in a selector. However if you still pass
         * in a selector it will look for that element first and call the action on that element.
         */
        $$(
            selector: string | Function
        ): Promise<ElementArray>;

        /**
         * The `$` command is a short way to call the [`findElement`](/docs/api/webdriver.html#findelement) command in order
         * to fetch a single element on the page. It returns an object that with an extended prototype to call
         * action commands without passing in a selector. However if you still pass in a selector it will look
         * for that element first and call the action on that element. You can also pass in an object as selector
         * where the object contains a property `element-6066-11e4-a52e-4f735466cecf` with the value of a reference
         * to an element. The command will then transform the reference to an extended WebdriverIO element.
         */
        $(
            selector: string | Function | object
        ): Promise<Element>;

        /**
         * The `customs$$` allows you to use a custom strategy declared by using `browser.addLocatorStrategy`
         */
        custom$$(
            strategyName: string,
            strategyArguments: any
        ): Promise<ElementArray>;

        /**
         * The `custom$` allows you to use a custom strategy declared by using `browser.addLocatorStrategy`
         */
        custom$(
            strategyName: string,
            strategyArguments: any
        ): Promise<Element>;

        /**
         * This command helps you to debug your integration tests. It stops the running browser and gives
         * you time to jump into it and check the state of your application (e.g. using dev tools).
         * Your terminal transforms into a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)
         * interface that will allow you to try out certain commands, find elements and test actions on
         * them.
         */
        debug(): Promise<void>;

        /**
         * Delete cookies visible to the current page. By providing a cookie name it just removes the single cookie or more when multiple names are passed.
         */
        deleteCookies(
            names?: string | string[]
        ): Promise<void>;

        /**
         * Retrieve a [cookie](https://w3c.github.io/webdriver/webdriver-spec.html#cookies)
         * visible to the current page. You can query a specific cookie by providing the cookie name or
         * retrieve all.
         */
        getCookies(
            names?: string[] | string
        ): Promise<WebDriver.Cookie[]>;

        /**
         * Returns browser window size (and position for drivers with W3C support).
         */
        getWindowSize(): Promise<WebDriver.RectReturn>;

        /**
         * Send a sequence of key strokes to the active element. You can also use characters like
         * "Left arrow" or "Back space". WebdriverIO will take care of translating them into unicode
         * characters. You’ll find all supported characters [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions).
         * To do that, the value has to correspond to a key from the table.
         */
        keys(
            value: string | string[]
        ): Promise<void>;

        /**
         * Open new window in browser. This command is the equivalent function to `window.open()`. This command does not
         * work in mobile environments.
         */
        newWindow(
            url: string,
            options?: NewWindowOptions
        ): Promise<string>;

        /**
         * Pauses execution for a specific amount of time. It is recommended to not use this command to wait for an
         * element to show up. In order to avoid flaky test results it is better to use commands like
         * [`waitForExist`](/docs/api/element/waitForExist.html) or other waitFor* commands.
         */
        pause(
            milliseconds: number
        ): Promise<void>;

        /**
         * The `react$$` command is a useful command to query multiple React Components
         * by their actual name and filter them by props and state.
         */
        react$$(
            selector: string,
            options?: ReactSelectorOptions
        ): Promise<ElementArray>;

        /**
         * The `react$` command is a useful command to query React Components by their
         * actual name and filter them by props and state.
         */
        react$(
            selector: string,
            options?: ReactSelectorOptions
        ): Promise<Element>;

        /**
         * Creates a new Selenium session with your current capabilities. This is useful if you
         * test highly stateful application where you need to clean the browser session between
         * the tests in your spec file to avoid creating hundreds of single test files with WDIO.
         * Be careful though, this command affects your test time tremendously since spawning
         * new Selenium sessions is very time consuming especially when using cloud services.
         */
        reloadSession(): Promise<void>;

        /**
         * Appium only. Save a video started by startRecordingScreen command to file.
         * See [Appium docs](http://appium.io/docs/en/commands/device/recording-screen/start-recording-screen/)
         */
        saveRecordingScreen(
            filepath: string
        ): Promise<Buffer>;

        /**
         * Save a screenshot of the current browsing context to a PNG file on your OS. Be aware that
         * some browser drivers take screenshots of the whole document (e.g. Geckodriver with Firefox)
         * and others only of the current viewport (e.g. Chromedriver with Chrome).
         */
        saveScreenshot(
            filepath: string
        ): Promise<Buffer>;

        /**
         * Sets one or more [cookies](https://w3c.github.io/webdriver/#cookies) for the current page. Make sure you are
         * on the page that should receive the cookie. You can't set a cookie for an arbitrary page without
         * being on that page.
         */
        setCookies(
            cookie: WebDriver.Cookie[] | WebDriver.Cookie
        ): Promise<void>;

        /**
         * Sets the timeouts associated with the current session, timeout durations control such
         * behaviour as timeouts on script injection, document navigation, and element retrieval.
         * For more information and examples, see [timeouts guide](https://webdriver.io/docs/timeouts.html#selenium-timeouts).
         */
        setTimeout(
            timeouts: Timeouts
        ): Promise<void>;

        /**
         * Resizes browser window outer size according to provided width and height.
         */
        setWindowSize(
            width: number,
            height: number
        ): Promise<null | object>;

        /**
         * Switch focus to a particular tab / window.
         */
        switchWindow(
            urlOrTitleToMatch: string | RegExp
        ): Promise<void>;

        /**
         * The Touch Action API provides the basis of all gestures that can be automated in Appium.
         * It is currently only available to native apps and can not be used to interact with webapps.
         * At its core is the ability to chain together _ad hoc_ individual actions, which will then be
         * applied to an element in the application on the device. The basic actions that can be used are:
         */
        touchAction(
            action: TouchActions
        ): Promise<void>;

        /**
         * Uploads a file to the Selenium Standalone server or other browser driver
         * (e.g. Chromedriver) by using the [`file`](/api/protocol/file.html) command.
         * _Note:_ that this command is only supported if you use a Selenium Hub or
         * Chromedriver directly.
         */
        uploadFile(
            localPath: string
        ): Promise<string>;

        /**
         * Protocol binding to load the URL of the browser. If a baseUrl is
         * specified in the config, it will be prepended to the url parameter using
         * node's url.resolve() method.
         */
        url(
            url?: string
        ): Promise<void>;

        /**
         * This wait command is your universal weapon if you want to wait on something. It expects a condition
         * and waits until that condition is fulfilled with a truthy value. If you use the WDIO testrunner the
         * commands within the condition are getting executed synchronously like in your test.
         */
        waitUntil(
            condition: () => Promise<Boolean>,
            options?: WaitUntilOptions
        ): Promise<boolean>;
    }

    interface Config extends Options, Omit<WebDriver.Options, "capabilities">, Hooks {}
}
