import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";

export default function addExtraLib(monaco: typeof monacoEditor) {
  // Add additional d.ts files to the JavaScript language service and change.
  // Also change the default compilation options.
  // The sample below shows how a class Facts is declared and introduced
  // to the system and how the compiler is told to use ES6 (target=2).

  // // validation settings
  // monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
  //     noSemanticValidation: true,
  //     noSyntaxValidation: false
  // });

  // // compiler options
  // monaco.languages.typescript
  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ES2015,
    allowNonTsExtensions: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
  });

  // extra libraries
  var libSource = `
    type ticker = {
        add: (fn: (t: number) => void) => void 
    }
    type time = number | string

    declare function createBezierEasing(x1: number, y1: number, x2: number, y2: number): (t: number, b: number, c: number, d: number) => number;
    
    declare var Tween: {        
        /**         
         * @param t time variable 时间变量
         * @param b initial value  初始值
         * @param c target value 变化量
         * @param d time of duration  变换持续时间
         * @returns result 当前时间的变换值
         */
        Linear: (t: number, b: number, c: number, d: number) => number;
        Quad: {
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeIn: (t: number, b: number, c: number, d: number) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeOut: (t: number, b: number, c: number, d: number) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeInOut: (t: number, b: number, c: number, d: number) => number;
        };
        Cubic: {
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeIn: (t: number, b: number, c: number, d: number) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeOut: (t: number, b: number, c: number, d: number) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeInOut: (t: number, b: number, c: number, d: number) => number;
        };
        Quart: {
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeIn: (t: number, b: number, c: number, d: number) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeOut: (t: number, b: number, c: number, d: number) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeInOut: (t: number, b: number, c: number, d: number) => number;
        };
        Quint: {
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeIn: (t: number, b: number, c: number, d: number) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeOut: (t: number, b: number, c: number, d: number) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeInOut: (t: number, b: number, c: number, d: number) => number;
        };
        Sine: {
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeIn: (t: number, b: number, c: number, d: number) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeOut: (t: number, b: number, c: number, d: number) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeInOut: (t: number, b: number, c: number, d: number) => number;
        };
        Expo: {
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeIn: (t: number, b: number, c: number, d: number) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeOut: (t: number, b: number, c: number, d: number) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeInOut: (t: number, b: number, c: number, d: number) => number;
        };
        Circ: {
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeIn: (t: number, b: number, c: number, d: number) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeOut: (t: number, b: number, c: number, d: number) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeInOut: (t: number, b: number, c: number, d: number) => number;
        };
        Elastic: {
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeIn: (t: number, b: number, c: number, d: number, a?: number | undefined, p?: number | undefined) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeOut: (t: number, b: number, c: number, d: number, a?: number | undefined, p?: number | undefined) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeInOut: (t: number, b: number, c: number, d: number, a?: number | undefined, p?: number | undefined) => number;
        };
        Back: {
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeIn: (t: number, b: number, c: number, d: number, s?: number | undefined) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeOut: (t: number, b: number, c: number, d: number, s?: number | undefined) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeInOut: (t: number, b: number, c: number, d: number, s?: number | undefined) => number;
        };
        Bounce: {
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeIn: (t: number, b: number, c: number, d: number) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeOut: (t: number, b: number, c: number, d: number) => number;
            /**         
             * @param t time variable 时间变量
             * @param b initial value  初始值
             * @param c target value 变化量
             * @param d time of duration  变换持续时间
             * @returns result 当前时间的变换值
             */
            easeInOut: (t: number, b: number, c: number, d: number) => number;
        };
    };
    
    
declare module "pixi.js" {
    export = PIXI;
}
declare namespace PIXI {

    export const filters: {
        AlphaFilter: typeof AlphaFilter;
        BlurFilter: typeof BlurFilter;
        BlurFilterPass: typeof BlurFilterPass;
        ColorMatrixFilter: typeof ColorMatrixFilter;
        DisplacementFilter: typeof DisplacementFilter;
        FXAAFilter: typeof FXAAFilter;
        NoiseFilter: typeof NoiseFilter;
    };



    export const VERSION = "$_VERSION";


    export class AccessibilityManager {

        debug: boolean;

        renderer: AbstractRenderer | Renderer;

        private _isActive;

        private _isMobileAccessibility;

        private _hookDiv;

        private div;

        private pool;

        private renderId;

        private children;

        private androidUpdateCount;

        private androidUpdateFrequency;

        constructor(renderer: AbstractRenderer | Renderer);

        get isActive(): boolean;

        get isMobileAccessibility(): boolean;

        private createTouchHook;

        private destroyTouchHook;

        private activate;

        private deactivate;

        private updateAccessibleObjects;

        private update;

        updateDebugHTML(div: IAccessibleHTMLElement): void;

        capHitArea(hitArea: Rectangle): void;

        private addChild;

        private _onClick;

        private _onFocus;

        private _onFocusOut;

        private _onKeyDown;

        private _onMouseMove;

        destroy(): void;
    }


    export const accessibleTarget: IAccessibleTarget;

    export interface IAccessibleHTMLElement extends HTMLElement {
        type?: string;
        displayObject?: DisplayObject;
    }

    export interface IAccessibleTarget {
        accessible: boolean;
        accessibleTitle: string;
        accessibleHint: string;
        tabIndex: number;
        _accessibleActive: boolean;
        _accessibleDiv: IAccessibleHTMLElement;
        accessibleType: string;
        accessiblePointerEvents: PointerEvents;
        accessibleChildren: boolean;
        renderId: number;
    }

    export type PointerEvents = 'auto' | 'none' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | 'inherit';



    export interface Application extends GlobalMixins.Application {
    }


    export class Application {

        private static _plugins;

        stage: Container;

        renderer: Renderer | AbstractRenderer;

        constructor(options?: IApplicationOptions);

        static registerPlugin(plugin: IApplicationPlugin): void;

        render(): void;

        get view(): HTMLCanvasElement;

        get screen(): Rectangle;

        destroy(removeView?: boolean, stageOptions?: IDestroyOptions | boolean): void;
    }

    export interface IApplicationOptions extends IRendererOptionsAuto, GlobalMixins.IApplicationOptions {
    }


    export interface IApplicationPlugin {

        init(options: IApplicationOptions): void;

        destroy(): void;
    }



    export abstract class BlobResource extends BufferResource {
        protected origin: string;
        protected buffer: ViewableBuffer;
        protected loaded: boolean;

        constructor(source: string | Uint8Array | Uint32Array | Float32Array, options?: IBlobOptions);
        protected onBlobLoaded(_data: ArrayBuffer): void;

        load(): Promise<Resource>;
    }


    export type CompressedLevelBuffer = {
        levelID: number;
        levelWidth: number;
        levelHeight: number;
        levelBuffer: Uint8Array;
    };

    export type CompressedTextureExtensionRef = keyof CompressedTextureExtensions;


    export type CompressedTextureExtensions = {
        s3tc?: WEBGL_compressed_texture_s3tc;
        s3tc_sRGB: WEBGL_compressed_texture_s3tc_srgb;
        etc: any;
        etc1: any;
        pvrtc: any;
        atc: any;
        astc: WEBGL_compressed_texture_astc;
    };


    export class CompressedTextureLoader {

        static textureExtensions: Partial<CompressedTextureExtensions>;

        static textureFormats: {
            [P in keyof INTERNAL_FORMATS]?: number;
        };

        static use(resource: LoaderResource, next: (...args: any[]) => void): void;

        static add(): void;
    }


    export type CompressedTextureManifest = {
        textures: Array<{
            src: string;
            format?: keyof INTERNAL_FORMATS;
        }>;
        cacheID: string;
    };


    export class CompressedTextureResource extends BlobResource {

        format: INTERNAL_FORMATS;

        levels: number;
        private _extension;
        private _levelBuffers;

        constructor(source: string | Uint8Array | Uint32Array, options: ICompressedTextureResourceOptions);

        upload(renderer: Renderer, _texture: BaseTexture, _glTexture: GLTexture): boolean;

        protected onBlobLoaded(): void;

        private static _formatToExtension;

        private static _createLevelBuffers;
    }


    export class DDSLoader {

        static use(resource: LoaderResource, next: (...args: any[]) => void): void;

        private static parse;
    }


    export const FORMATS_TO_COMPONENTS: {
        [id: number]: number;
    };

    interface IBlobOptions {
        autoLoad?: boolean;
        width: number;
        height: number;
    }


    export interface ICompressedTextureResourceOptions {
        format: INTERNAL_FORMATS;
        width: number;
        height: number;
        levels?: number;
        levelBuffers?: CompressedLevelBuffer[];
    }


    export const INTERNAL_FORMAT_TO_BYTES_PER_PIXEL: {
        [id: number]: number;
    };


    export enum INTERNAL_FORMATS {
        COMPRESSED_RGB_S3TC_DXT1_EXT = 33776,
        COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777,
        COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778,
        COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779,
        COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917,
        COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918,
        COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919,
        COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916,
        COMPRESSED_R11_EAC = 37488,
        COMPRESSED_SIGNED_R11_EAC = 37489,
        COMPRESSED_RG11_EAC = 37490,
        COMPRESSED_SIGNED_RG11_EAC = 37491,
        COMPRESSED_RGB8_ETC2 = 37492,
        COMPRESSED_RGBA8_ETC2_EAC = 37496,
        COMPRESSED_SRGB8_ETC2 = 37493,
        COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497,
        COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494,
        COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495,
        COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840,
        COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842,
        COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841,
        COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843,
        COMPRESSED_RGB_ETC1_WEBGL = 36196,
        COMPRESSED_RGB_ATC_WEBGL = 35986,
        COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986,
        COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798
    }


    export class KTXLoader {

        static use(resource: LoaderResource, next: (...args: any[]) => void): void;

        private static parse;

        private static validate;
        private static convertFormatToInteger;
    }


    export const TYPES_TO_BYTES_PER_COMPONENT: {
        [id: number]: number;
    };


    export const TYPES_TO_BYTES_PER_PIXEL: {
        [id: number]: number;
    };



    export enum ALPHA_MODES {
        NPM = 0,
        UNPACK = 1,
        PMA = 2,
        NO_PREMULTIPLIED_ALPHA = 0,
        PREMULTIPLY_ON_UPLOAD = 1,
        PREMULTIPLY_ALPHA = 2,
        PREMULTIPLIED_ALPHA = 2
    }


    export enum BLEND_MODES {
        NORMAL = 0,
        ADD = 1,
        MULTIPLY = 2,
        SCREEN = 3,
        OVERLAY = 4,
        DARKEN = 5,
        LIGHTEN = 6,
        COLOR_DODGE = 7,
        COLOR_BURN = 8,
        HARD_LIGHT = 9,
        SOFT_LIGHT = 10,
        DIFFERENCE = 11,
        EXCLUSION = 12,
        HUE = 13,
        SATURATION = 14,
        COLOR = 15,
        LUMINOSITY = 16,
        NORMAL_NPM = 17,
        ADD_NPM = 18,
        SCREEN_NPM = 19,
        NONE = 20,
        SRC_OVER = 0,
        SRC_IN = 21,
        SRC_OUT = 22,
        SRC_ATOP = 23,
        DST_OVER = 24,
        DST_IN = 25,
        DST_OUT = 26,
        DST_ATOP = 27,
        ERASE = 26,
        SUBTRACT = 28,
        XOR = 29
    }


    export enum BUFFER_BITS {
        COLOR = 16384,
        DEPTH = 256,
        STENCIL = 1024
    }


    export enum BUFFER_TYPE {
        ELEMENT_ARRAY_BUFFER = 34963,
        ARRAY_BUFFER = 34962,
        UNIFORM_BUFFER = 35345
    }


    export enum CLEAR_MODES {
        NO = 0,
        YES = 1,
        AUTO = 2,
        BLEND = 0,
        CLEAR = 1,
        BLIT = 2
    }


    export enum DRAW_MODES {
        POINTS = 0,
        LINES = 1,
        LINE_LOOP = 2,
        LINE_STRIP = 3,
        TRIANGLES = 4,
        TRIANGLE_STRIP = 5,
        TRIANGLE_FAN = 6
    }


    export enum ENV {
        WEBGL_LEGACY = 0,
        WEBGL = 1,
        WEBGL2 = 2
    }


    export enum FORMATS {
        RGBA = 6408,
        RGB = 6407,
        RG = 33319,
        RED = 6403,
        RGBA_INTEGER = 36249,
        RGB_INTEGER = 36248,
        RG_INTEGER = 33320,
        RED_INTEGER = 36244,
        ALPHA = 6406,
        LUMINANCE = 6409,
        LUMINANCE_ALPHA = 6410,
        DEPTH_COMPONENT = 6402,
        DEPTH_STENCIL = 34041
    }


    export enum GC_MODES {
        AUTO = 0,
        MANUAL = 1
    }


    export enum MASK_TYPES {
        NONE = 0,
        SCISSOR = 1,
        STENCIL = 2,
        SPRITE = 3
    }


    export enum MIPMAP_MODES {
        OFF = 0,
        POW2 = 1,
        ON = 2,
        ON_MANUAL = 3
    }


    export enum MSAA_QUALITY {
        NONE = 0,
        LOW = 2,
        MEDIUM = 4,
        HIGH = 8
    }


    export enum PRECISION {
        LOW = "lowp",
        MEDIUM = "mediump",
        HIGH = "highp"
    }


    export enum RENDERER_TYPE {
        UNKNOWN = 0,
        WEBGL = 1,
        CANVAS = 2
    }


    export enum SAMPLER_TYPES {
        FLOAT = 0,
        INT = 1,
        UINT = 2
    }


    export enum SCALE_MODES {
        NEAREST = 0,
        LINEAR = 1
    }


    export enum TARGETS {
        TEXTURE_2D = 3553,
        TEXTURE_CUBE_MAP = 34067,
        TEXTURE_2D_ARRAY = 35866,
        TEXTURE_CUBE_MAP_POSITIVE_X = 34069,
        TEXTURE_CUBE_MAP_NEGATIVE_X = 34070,
        TEXTURE_CUBE_MAP_POSITIVE_Y = 34071,
        TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072,
        TEXTURE_CUBE_MAP_POSITIVE_Z = 34073,
        TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074
    }


    export enum TYPES {
        UNSIGNED_BYTE = 5121,
        UNSIGNED_SHORT = 5123,
        UNSIGNED_SHORT_5_6_5 = 33635,
        UNSIGNED_SHORT_4_4_4_4 = 32819,
        UNSIGNED_SHORT_5_5_5_1 = 32820,
        UNSIGNED_INT = 5125,
        UNSIGNED_INT_10F_11F_11F_REV = 35899,
        UNSIGNED_INT_2_10_10_10_REV = 33640,
        UNSIGNED_INT_24_8 = 34042,
        UNSIGNED_INT_5_9_9_9_REV = 35902,
        BYTE = 5120,
        SHORT = 5122,
        INT = 5124,
        FLOAT = 5126,
        FLOAT_32_UNSIGNED_INT_24_8_REV = 36269,
        HALF_FLOAT = 36193
    }


    export enum WRAP_MODES {
        CLAMP = 33071,
        REPEAT = 10497,
        MIRRORED_REPEAT = 33648
    }


    export class AbstractBatchRenderer extends ObjectRenderer {

        readonly state: State;

        size: number;

        MAX_TEXTURES: number;

        protected shaderGenerator: BatchShaderGenerator;

        protected geometryClass: typeof BatchGeometry;

        protected vertexSize: number;

        protected _vertexCount: number;

        protected _indexCount: number;

        protected _bufferedElements: Array<IBatchableElement>;

        protected _bufferedTextures: Array<BaseTexture>;

        protected _bufferSize: number;

        protected _shader: Shader;

        protected _flushId: number;

        protected _aBuffers: Array<ViewableBuffer>;

        protected _iBuffers: Array<Uint16Array>;
        protected _dcIndex: number;
        protected _aIndex: number;
        protected _iIndex: number;
        protected _attributeBuffer: ViewableBuffer;
        protected _indexBuffer: Uint16Array;
        protected _tempBoundTextures: BaseTexture[];

        private _packedGeometries;

        private _packedGeometryPoolSize;

        constructor(renderer: Renderer);

        contextChange(): void;

        initFlushBuffers(): void;

        onPrerender(): void;

        render(element: IBatchableElement): void;
        buildTexturesAndDrawCalls(): void;

        buildDrawCalls(texArray: BatchTextureArray, start: number, finish: number): void;

        bindAndClearTexArray(texArray: BatchTextureArray): void;
        updateGeometry(): void;
        drawBatches(): void;

        flush(): void;

        start(): void;

        stop(): void;

        destroy(): void;

        getAttributeBuffer(size: number): ViewableBuffer;

        getIndexBuffer(size: number): Uint16Array;

        packInterleavedGeometry(element: IBatchableElement, attributeBuffer: ViewableBuffer, indexBuffer: Uint16Array, aIndex: number, iIndex: number): void;

        static _drawCallPool: Array<BatchDrawCall>;

        static _textureArrayPool: Array<BatchTextureArray>;
    }


    class AbstractMaskSystem implements ISystem {

        protected maskStack: Array<MaskData>;

        protected glConst: number;
        protected renderer: Renderer;

        constructor(renderer: Renderer);

        getStackLength(): number;

        setMaskStack(maskStack: Array<MaskData>): void;

        protected _useCurrent(): void;

        destroy(): void;
    }


    export abstract class AbstractMultiResource extends Resource {

        readonly length: number;

        items: Array<BaseTexture>;

        itemDirtyIds: Array<number>;

        private _load;

        baseTexture: BaseTexture;

        constructor(length: number, options?: ISize);

        protected initFromArray(resources: Array<any>, options?: IAutoDetectOptions): void;

        dispose(): void;

        abstract addBaseTextureAt(baseTexture: BaseTexture, index: number): this;

        addResourceAt(resource: Resource, index: number): this;

        bind(baseTexture: BaseTexture): void;

        unbind(baseTexture: BaseTexture): void;

        load(): Promise<this>;
    }


    export abstract class AbstractRenderer extends EventEmitter {
        resolution: number;
        clearBeforeRender?: boolean;
        readonly options: IRendererOptions;
        readonly type: RENDERER_TYPE;
        readonly screen: Rectangle;
        readonly view: HTMLCanvasElement;
        readonly plugins: IRendererPlugins;
        readonly useContextAlpha: boolean | 'notMultiplied';
        readonly autoDensity: boolean;
        readonly preserveDrawingBuffer: boolean;
        protected _backgroundColor: number;
        protected _backgroundColorString: string;
        _backgroundColorRgba: number[];
        _lastObjectRendered: IRenderableObject;

        constructor(type?: RENDERER_TYPE, options?: IRendererOptions);

        initPlugins(staticMap: IRendererPlugins): void;

        get width(): number;

        get height(): number;

        resize(desiredScreenWidth: number, desiredScreenHeight: number): void;

        generateTexture(displayObject: IRenderableObject, options?: IGenerateTextureOptions): RenderTexture;

        generateTexture(displayObject: IRenderableObject, scaleMode?: SCALE_MODES, resolution?: number, region?: Rectangle): RenderTexture;

        abstract addSystem(ClassRef: ISystemConstructor, name: string): this;
        abstract render(displayObject: IRenderableObject, options?: IRendererRenderOptions): void;

        destroy(removeView?: boolean): void;

        get backgroundColor(): number;
        set backgroundColor(value: number);

        get backgroundAlpha(): number;
        set backgroundAlpha(value: number);
    }


    export class ArrayResource extends AbstractMultiResource {

        constructor(source: number | Array<any>, options?: ISize);

        addBaseTextureAt(baseTexture: BaseTexture, index: number): this;

        bind(baseTexture: BaseTexture): void;

        upload(renderer: Renderer, texture: BaseTexture, glTexture: GLTexture): boolean;
    }


    export class Attribute {
        buffer: number;
        size: number;
        normalized: boolean;
        type: TYPES;
        stride: number;
        start: number;
        instance: boolean;

        constructor(buffer: number, size?: number, normalized?: boolean, type?: TYPES, stride?: number, start?: number, instance?: boolean);

        destroy(): void;

        static from(buffer: number, size?: number, normalized?: boolean, type?: TYPES, stride?: number): Attribute;
    }


    export function autoDetectRenderer(options?: IRendererOptionsAuto): AbstractRenderer;


    export function autoDetectResource<R extends Resource, RO>(source: unknown, options?: RO): R;


    export class BaseImageResource extends Resource {

        source: ImageSource;

        noSubImage: boolean;

        constructor(source: ImageSource);

        static crossOrigin(element: HTMLImageElement | HTMLVideoElement, url: string, crossorigin?: boolean | string): void;

        upload(renderer: Renderer, baseTexture: BaseTexture, glTexture: GLTexture, source?: ImageSource): boolean;

        update(): void;

        dispose(): void;
    }

    export interface BaseRenderTexture extends GlobalMixins.BaseRenderTexture, BaseTexture {
    }


    export class BaseRenderTexture extends BaseTexture {
        clearColor: number[];
        framebuffer: Framebuffer;

        maskStack: Array<MaskData>;

        filterStack: Array<any>;

        constructor(options?: IBaseTextureOptions);

        resize(desiredWidth: number, desiredHeight: number): void;

        dispose(): void;

        destroy(): void;
    }

    export interface BaseTexture extends GlobalMixins.BaseTexture, EventEmitter {
    }


    export class BaseTexture<R extends Resource = Resource, RO = IAutoDetectOptions> extends EventEmitter {

        width: number;

        height: number;

        resolution: number;

        alphaMode?: ALPHA_MODES;

        anisotropicLevel?: number;

        format?: FORMATS;

        type?: TYPES;

        target?: TARGETS;

        readonly uid: number;

        touched: number;

        isPowerOfTwo: boolean;

        _glTextures: {
            [key: number]: GLTexture;
        };

        dirtyId: number;

        dirtyStyleId: number;

        cacheId: string;

        valid: boolean;

        textureCacheIds: Array<string>;

        destroyed: boolean;

        resource: R;

        _batchEnabled: number;

        _batchLocation: number;

        parentTextureArray: BaseTexture;
        private _mipmap?;
        private _scaleMode?;
        private _wrapMode?;

        constructor(resource?: R | ImageSource | string | any, options?: IBaseTextureOptions<RO>);

        get realWidth(): number;

        get realHeight(): number;

        get mipmap(): MIPMAP_MODES;
        set mipmap(value: MIPMAP_MODES);

        get scaleMode(): SCALE_MODES;
        set scaleMode(value: SCALE_MODES);

        get wrapMode(): WRAP_MODES;
        set wrapMode(value: WRAP_MODES);

        setStyle(scaleMode?: SCALE_MODES, mipmap?: MIPMAP_MODES): this;

        setSize(desiredWidth: number, desiredHeight: number, resolution?: number): this;

        setRealSize(realWidth: number, realHeight: number, resolution?: number): this;

        protected _refreshPOT(): void;

        setResolution(resolution: number): this;

        setResource(resource: R): this;

        update(): void;

        onError(event: ErrorEvent): void;

        destroy(): void;

        dispose(): void;

        castToBaseTexture(): BaseTexture;

        static from<R extends Resource = Resource, RO = IAutoDetectOptions>(source: ImageSource | string, options?: IBaseTextureOptions<RO>, strict?: boolean): BaseTexture<R>;

        static fromBuffer(buffer: Float32Array | Uint8Array, width: number, height: number, options?: IBaseTextureOptions): BaseTexture<BufferResource>;

        static addToCache(baseTexture: BaseTexture, id: string): void;

        static removeFromCache(baseTexture: string | BaseTexture): BaseTexture | null;

        static _globalBatch: number;
    }


    export class BatchDrawCall {
        texArray: BatchTextureArray;
        type: DRAW_MODES;
        blend: BLEND_MODES;
        start: number;
        size: number;

        data: any;
        constructor();
    }


    export class BatchGeometry extends Geometry {

        _buffer: Buffer_2;

        _indexBuffer: Buffer_2;

        constructor(_static?: boolean);
    }


    export class BatchPluginFactory {

        static create(options?: IBatchFactoryOptions): typeof AbstractBatchRenderer;

        static get defaultVertexSrc(): string;

        static get defaultFragmentTemplate(): string;
    }

    export const BatchRenderer: typeof AbstractBatchRenderer;


    export class BatchShaderGenerator {

        vertexSrc: string;

        fragTemplate: string;
        programCache: {
            [key: number]: Program;
        };
        defaultGroupCache: {
            [key: number]: UniformGroup;
        };

        constructor(vertexSrc: string, fragTemplate: string);
        generateShader(maxTextures: number): Shader;
        generateSampleSrc(maxTextures: number): string;
    }


    export class BatchSystem implements ISystem {

        readonly emptyRenderer: ObjectRenderer;

        currentRenderer: ObjectRenderer;
        private renderer;

        constructor(renderer: Renderer);

        setObjectRenderer(objectRenderer: ObjectRenderer): void;

        flush(): void;

        reset(): void;

        copyBoundTextures(arr: BaseTexture[], maxTextures: number): void;

        boundArray(texArray: BatchTextureArray, boundTextures: Array<BaseTexture>, batchId: number, maxTextures: number): void;

        destroy(): void;
    }


    export class BatchTextureArray {

        elements: BaseTexture[];

        ids: number[];

        count: number;
        constructor();
        clear(): void;
    }


    class Buffer_2 {

        data: ITypedArray;

        type: BUFFER_TYPE;
        static: boolean;
        id: number;
        disposeRunner: Runner;

        _glBuffers: {
            [key: number]: GLBuffer;
        };
        _updateID: number;

        constructor(data?: IArrayBuffer, _static?: boolean, index?: boolean);

        update(data?: IArrayBuffer | Array<number>): void;

        dispose(): void;

        destroy(): void;

        set index(value: boolean);
        get index(): boolean;

        static from(data: IArrayBuffer | number[]): Buffer_2;
    }
    export { Buffer_2 as Buffer }



    export class BufferResource extends Resource {

        data: Float32Array | Uint8Array | Uint16Array | Int32Array | Uint32Array;

        constructor(source: Float32Array | Uint8Array | Uint16Array | Int32Array | Uint32Array, options: ISize);

        upload(renderer: Renderer, baseTexture: BaseTexture, glTexture: GLTexture): boolean;

        dispose(): void;

        static test(source: unknown): source is Float32Array | Uint8Array | Uint32Array;
    }


    class BufferSystem implements ISystem {
        CONTEXT_UID: number;
        gl: IRenderingContext;

        readonly managedBuffers: {
            [key: number]: Buffer_2;
        };

        readonly boundBufferBases: {
            [key: number]: Buffer_2;
        };
        private renderer;

        constructor(renderer: Renderer);

        destroy(): void;

        protected contextChange(): void;

        bind(buffer: Buffer_2): void;

        bindBufferBase(buffer: Buffer_2, index: number): void;

        bindBufferRange(buffer: Buffer_2, index?: number, offset?: number): void;

        update(buffer: Buffer_2): void;

        dispose(buffer: Buffer_2, contextLost?: boolean): void;

        disposeAll(contextLost?: boolean): void;

        protected createGLBuffer(buffer: Buffer_2): GLBuffer;
    }



    export class CanvasResource extends BaseImageResource {

        constructor(source: HTMLCanvasElement);

        static test(source: unknown): source is OffscreenCanvas | HTMLCanvasElement;
    }

    export function checkMaxIfStatementsInShader(maxIfs: number, gl: IRenderingContext): number;


    export class ContextSystem implements ISystem {

        webGLVersion: number;

        readonly supports: ISupportDict;
        protected CONTEXT_UID: number;
        protected gl: IRenderingContext;

        extensions: WebGLExtensions;
        private renderer;

        constructor(renderer: Renderer);

        get isLost(): boolean;

        protected contextChange(gl: IRenderingContext): void;

        initFromContext(gl: IRenderingContext): void;

        initFromOptions(options: WebGLContextAttributes): void;

        createContext(canvas: HTMLCanvasElement, options: WebGLContextAttributes): IRenderingContext;

        protected getExtensions(): void;

        protected handleContextLost(event: WebGLContextEvent): void;

        protected handleContextRestored(): void;
        destroy(): void;

        protected postrender(): void;

        protected validateContext(gl: IRenderingContext): void;
    }


    export function createUBOElements(uniformData: IUniformData[]): {
        uboElements: UBOElement[];
        size: number;
    };


    export class CubeResource extends AbstractMultiResource {
        items: ArrayFixed<BaseTexture, 6>;

        linkBaseTexture: boolean;

        constructor(source?: ArrayFixed<string | Resource, 6>, options?: ICubeResourceOptions);

        bind(baseTexture: BaseTexture): void;
        addBaseTextureAt(baseTexture: BaseTexture, index: number, linkBaseTexture?: boolean): this;

        upload(renderer: Renderer, _baseTexture: BaseTexture, glTexture: GLTexture): boolean;

        static SIDES: number;

        static test(source: unknown): source is ArrayFixed<string | Resource, 6>;
    }

    export const defaultFilterVertex: string;


    export const defaultVertex: string;


    export class Filter extends Shader {

        padding: number;

        multisample: MSAA_QUALITY;

        enabled: boolean;

        autoFit: boolean;

        legacy: boolean;

        state: State;
        protected _resolution: number;

        constructor(vertexSrc?: string, fragmentSrc?: string, uniforms?: Dict<any>);

        apply(filterManager: FilterSystem, input: RenderTexture, output: RenderTexture, clearMode?: CLEAR_MODES, _currentState?: FilterState): void;

        get blendMode(): BLEND_MODES;
        set blendMode(value: BLEND_MODES);

        get resolution(): number;
        set resolution(value: number);

        static get defaultVertexSrc(): string;

        static get defaultFragmentSrc(): string;

        static SOURCE_KEY_MAP: Dict<string>;
    }


    export class FilterState {
        renderTexture: RenderTexture;

        target: IFilterTarget;

        legacy: boolean;

        resolution: number;

        multisample: MSAA_QUALITY;

        sourceFrame: Rectangle;

        destinationFrame: Rectangle;

        bindingSourceFrame: Rectangle;

        bindingDestinationFrame: Rectangle;

        filters: Array<Filter>;

        transform: Matrix;
        constructor();

        clear(): void;
    }


    export class FilterSystem implements ISystem {

        readonly defaultFilterStack: Array<FilterState>;

        statePool: Array<FilterState>;

        texturePool: RenderTexturePool;

        forceClear: boolean;

        useMaxPadding: boolean;

        protected quad: Quad;

        protected quadUv: QuadUv;

        protected activeState: FilterState;

        protected globalUniforms: UniformGroup;

        private tempRect;
        renderer: Renderer;

        constructor(renderer: Renderer);

        push(target: IFilterTarget, filters: Array<Filter>): void;

        pop(): void;

        bindAndClear(filterTexture: RenderTexture, clearMode?: CLEAR_MODES): void;

        applyFilter(filter: Filter, input: RenderTexture, output: RenderTexture, clearMode?: CLEAR_MODES): void;

        calculateSpriteMatrix(outputMatrix: Matrix, sprite: ISpriteMaskTarget): Matrix;

        destroy(): void;

        protected getOptimalFilterTexture(minWidth: number, minHeight: number, resolution?: number, multisample?: MSAA_QUALITY): RenderTexture;

        getFilterTexture(input?: RenderTexture, resolution?: number, multisample?: MSAA_QUALITY): RenderTexture;

        returnFilterTexture(renderTexture: RenderTexture): void;

        emptyPool(): void;

        resize(): void;

        private transformAABB;
        private roundFrame;
    }


    export class Framebuffer {

        width: number;

        height: number;

        multisample: MSAA_QUALITY;
        stencil: boolean;
        depth: boolean;
        dirtyId: number;
        dirtyFormat: number;
        dirtySize: number;
        depthTexture: BaseTexture;
        colorTextures: Array<BaseTexture>;
        glFramebuffers: {
            [key: string]: GLFramebuffer;
        };
        disposeRunner: Runner;

        constructor(width: number, height: number);

        get colorTexture(): BaseTexture;

        addColorTexture(index?: number, texture?: BaseTexture): this;

        addDepthTexture(texture?: BaseTexture): this;

        enableDepth(): this;

        enableStencil(): this;

        resize(width: number, height: number): void;

        dispose(): void;

        destroyDepthTexture(): void;
    }


    export class FramebufferSystem implements ISystem {

        readonly managedFramebuffers: Array<Framebuffer>;
        current: Framebuffer;
        viewport: Rectangle;
        hasMRT: boolean;
        writeDepthTexture: boolean;
        protected CONTEXT_UID: number;
        protected gl: IRenderingContext;

        protected unknownFramebuffer: Framebuffer;
        protected msaaSamples: Array<number>;
        renderer: Renderer;

        constructor(renderer: Renderer);

        protected contextChange(): void;

        bind(framebuffer?: Framebuffer, frame?: Rectangle, mipLevel?: number): void;

        setViewport(x: number, y: number, width: number, height: number): void;

        get size(): {
            x: number;
            y: number;
            width: number;
            height: number;
        };

        clear(r: number, g: number, b: number, a: number, mask?: BUFFER_BITS): void;

        initFramebuffer(framebuffer: Framebuffer): GLFramebuffer;

        resizeFramebuffer(framebuffer: Framebuffer): void;

        updateFramebuffer(framebuffer: Framebuffer, mipLevel: number): void;

        protected canMultisampleFramebuffer(framebuffer: Framebuffer): boolean;

        protected detectSamples(samples: MSAA_QUALITY): MSAA_QUALITY;

        blit(framebuffer?: Framebuffer, sourcePixels?: Rectangle, destPixels?: Rectangle): void;

        disposeFramebuffer(framebuffer: Framebuffer, contextLost?: boolean): void;

        disposeAll(contextLost?: boolean): void;

        forceStencil(): void;

        reset(): void;
        destroy(): void;
    }


    export function generateProgram(gl: IRenderingContext, program: Program): GLProgram;

    export function generateUniformBufferSync(group: UniformGroup, uniformData: Dict<any>): {
        size: number;
        syncFunc: UniformsSyncCallback;
    };


    export class Geometry {
        buffers: Array<Buffer_2>;
        indexBuffer: Buffer_2;
        attributes: {
            [key: string]: Attribute;
        };
        id: number;

        instanced: boolean;

        instanceCount: number;

        glVertexArrayObjects: {
            [key: number]: {
                [key: string]: WebGLVertexArrayObject;
            };
        };
        disposeRunner: Runner;

        refCount: number;

        constructor(buffers?: Array<Buffer_2>, attributes?: {
            [key: string]: Attribute;
        });

        addAttribute(id: string, buffer: Buffer_2 | Float32Array | Uint32Array | Array<number>, size?: number, normalized?: boolean, type?: TYPES, stride?: number, start?: number, instance?: boolean): this;

        getAttribute(id: string): Attribute;

        getBuffer(id: string): Buffer_2;

        addIndex(buffer?: Buffer_2 | IArrayBuffer | number[]): Geometry;

        getIndex(): Buffer_2;

        interleave(): Geometry;

        getSize(): number;

        dispose(): void;

        destroy(): void;

        clone(): Geometry;

        static merge(geometries: Array<Geometry>): Geometry;
    }


    export class GeometrySystem implements ISystem {

        hasVao: boolean;

        hasInstance: boolean;

        canUseUInt32ElementIndex: boolean;
        protected CONTEXT_UID: number;
        protected gl: IRenderingContext;
        protected _activeGeometry: Geometry;
        protected _activeVao: WebGLVertexArrayObject;
        protected _boundBuffer: GLBuffer;

        readonly managedGeometries: {
            [key: number]: Geometry;
        };

        private renderer;

        constructor(renderer: Renderer);

        protected contextChange(): void;

        bind(geometry?: Geometry, shader?: Shader): void;

        reset(): void;

        updateBuffers(): void;

        protected checkCompatibility(geometry: Geometry, program: Program): void;

        protected getSignature(geometry: Geometry, program: Program): string;

        protected initGeometryVao(geometry: Geometry, shader: Shader, incRefCount?: boolean): WebGLVertexArrayObject;

        disposeGeometry(geometry: Geometry, contextLost?: boolean): void;

        disposeAll(contextLost?: boolean): void;

        protected activateVao(geometry: Geometry, program: Program): void;

        draw(type: DRAW_MODES, size?: number, start?: number, instanceCount?: number): this;

        protected unbind(): void;
        destroy(): void;
    }


    export function getTestContext(): WebGLRenderingContext | WebGL2RenderingContext;

    export function getUBOData(uniforms: Dict<any>, uniformData: Dict<any>): any[];

    class GLBuffer {
        buffer: WebGLBuffer;
        updateID: number;
        byteLength: number;
        refCount: number;
        constructor(buffer?: WebGLBuffer);
    }


    export class GLFramebuffer {

        framebuffer: WebGLFramebuffer;

        stencil: WebGLRenderbuffer;

        multisample: MSAA_QUALITY;

        msaaBuffer: WebGLRenderbuffer;

        blitFramebuffer: Framebuffer;

        dirtyId: number;

        dirtyFormat: number;

        dirtySize: number;

        mipLevel: number;
        constructor(framebuffer: WebGLTexture);
    }


    export class GLProgram {

        program: WebGLProgram;

        uniformData: Dict<any>;

        uniformGroups: Dict<any>;

        uniformBufferBindings: Dict<any>;

        uniformSync: Dict<any>;

        uniformDirtyGroups: Dict<any>;

        constructor(program: WebGLProgram, uniformData: {
            [key: string]: IGLUniformData;
        });

        destroy(): void;
    }


    export class GLTexture {

        texture: WebGLTexture;

        width: number;

        height: number;

        mipmap: boolean;

        wrapMode: number;

        type: number;

        internalFormat: number;

        samplerType: number;

        dirtyId: number;

        dirtyStyleId: number;
        constructor(texture: WebGLTexture);
    }


    export interface IArrayBuffer extends ArrayBuffer {
    }

    export interface IAttributeData {
        type: string;
        size: number;
        location: number;
        name: string;
    }

    export type IAutoDetectOptions = ISize | ICubeResourceOptions | IImageResourceOptions | ISVGResourceOptions | IVideoResourceOptions | IResourcePluginOptions;

    export interface IBaseTextureOptions<RO = any> {
        alphaMode?: ALPHA_MODES;
        mipmap?: MIPMAP_MODES;
        anisotropicLevel?: number;
        scaleMode?: SCALE_MODES;
        width?: number;
        height?: number;
        wrapMode?: WRAP_MODES;
        format?: FORMATS;
        type?: TYPES;
        target?: TARGETS;
        resolution?: number;
        multisample?: MSAA_QUALITY;
        resourceOptions?: RO;
        pixiIdPrefix?: string;
    }


    export interface IBatchableElement {
        _texture: Texture;
        vertexData: Float32Array;
        indices: Uint16Array | Uint32Array | Array<number>;
        uvs: Float32Array;
        worldAlpha: number;
        _tintRGB: number;
        blendMode: BLEND_MODES;
    }

    export interface IBatchFactoryOptions {
        vertex?: string;
        fragment?: string;
        geometryClass?: typeof BatchGeometry;
        vertexSize?: number;
    }


    export interface ICubeResourceOptions extends ISize {

        autoLoad?: boolean;

        linkBaseTexture?: boolean;
    }

    export interface IFilterTarget {
        filterArea: Rectangle;
        getBounds(skipUpdate?: boolean): Rectangle;
    }

    export interface IGenerateTextureOptions {
        scaleMode?: SCALE_MODES;
        resolution?: number;
        region?: Rectangle;
        multisample?: MSAA_QUALITY;
    }


    export class IGLUniformData {
        location: WebGLUniformLocation;
        value: number | boolean | Float32Array | Int32Array | Uint32Array | boolean[];
    }

    export interface IImageResourceOptions {

        autoLoad?: boolean;

        createBitmap?: boolean;

        crossorigin?: boolean | string;

        alphaMode?: ALPHA_MODES;
    }


    export class ImageBitmapResource extends BaseImageResource {

        constructor(source: ImageBitmap);

        static test(source: unknown): source is ImageBitmap;
    }


    export class ImageResource extends BaseImageResource {

        url: string;

        preserveBitmap: boolean;

        createBitmap: boolean;

        alphaMode: ALPHA_MODES;

        bitmap: ImageBitmap;

        private _load;

        private _process;

        constructor(source: HTMLImageElement | string, options?: IImageResourceOptions);

        load(createBitmap?: boolean): Promise<ImageResource>;

        process(): Promise<ImageResource>;

        upload(renderer: Renderer, baseTexture: BaseTexture, glTexture: GLTexture): boolean;

        dispose(): void;

        static test(source: unknown): source is string | HTMLImageElement;
    }

    export type ImageSource = HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap;

    export interface IMaskTarget extends IFilterTarget {
        renderable: boolean;
        isSprite?: boolean;
        worldTransform: Matrix;
        isFastRect?(): boolean;
        getBounds(skipUpdate?: boolean): Rectangle;
        render(renderer: Renderer): void;
    }


    export const INSTALLED: Array<IResourcePlugin<any, any>>;


    export interface IRenderableContainer extends IRenderableObject {

        getLocalBounds(rect?: Rectangle, skipChildrenUpdate?: boolean): Rectangle;
    }


    export interface IRenderableObject {

        parent: IRenderableContainer;

        enableTempParent(): IRenderableContainer;

        updateTransform(): void;

        disableTempParent(parent: IRenderableContainer): void;

        render(renderer: Renderer): void;
    }

    export interface IRendererOptions extends GlobalMixins.IRendererOptions {
        width?: number;
        height?: number;
        view?: HTMLCanvasElement;
        useContextAlpha?: boolean | 'notMultiplied';

        transparent?: boolean;
        autoDensity?: boolean;
        antialias?: boolean;
        resolution?: number;
        preserveDrawingBuffer?: boolean;
        clearBeforeRender?: boolean;
        backgroundColor?: number;
        backgroundAlpha?: number;
        powerPreference?: WebGLPowerPreference;
        context?: IRenderingContext;
    }

    export interface IRendererOptionsAuto extends IRendererOptions {
        forceCanvas?: boolean;
    }

    export interface IRendererPlugin {
        destroy(): void;
    }

    export interface IRendererPluginConstructor {
        new(renderer: Renderer, options?: any): IRendererPlugin;
    }

    export interface IRendererPlugins {
        [key: string]: any;
    }

    export interface IRendererRenderOptions {
        renderTexture?: RenderTexture;
        clear?: boolean;
        transform?: Matrix;
        skipUpdateTransform?: boolean;
    }


    export interface IRenderingContext extends WebGL2RenderingContext {
    }


    export interface IResourcePlugin<R, RO> {
        test(source: unknown, extension: string): boolean;
        new(source: any, options?: RO): R;
    }

    export type IResourcePluginOptions = {
        [key: string]: any;
    };

    export interface ISpriteMaskFilter extends Filter {
        maskSprite: IMaskTarget;
    }

    export interface ISpriteMaskTarget extends IMaskTarget {
        _texture: Texture;
        worldAlpha: number;
        anchor: Point;
    }

    export interface ISupportDict {
        uint32Indices: boolean;
    }

    export interface ISVGResourceOptions {
        source?: string;
        scale?: number;
        width?: number;
        height?: number;
        autoLoad?: boolean;
        crossorigin?: boolean | string;
    }


    export interface ISystem {

        destroy(): void;
    }


    export interface ISystemConstructor<R = Renderer> {
        new(renderer: R): ISystem;
    }


    export interface ITypedArray extends IArrayBuffer {
        readonly length: number;
        [index: number]: number;
        readonly BYTES_PER_ELEMENT: number;
    }

    export interface IUniformData {
        index: number;
        type: string;
        size: number;
        isArray: boolean;
        value: any;
        name: string;
    }

    export interface IUniformParser {
        test(data: unknown, uniform: any): boolean;
        code(name: string, uniform: any): string;
        codeUbo?(name: string, uniform: any): string;
    }

    export interface IUnloadableTexture {
        _texture: Texture | RenderTexture;
        children: IUnloadableTexture[];
    }

    export interface IVideoResourceOptions {
        autoLoad?: boolean;
        autoPlay?: boolean;
        updateFPS?: number;
        crossorigin?: boolean | string;
    }

    export interface IVideoResourceOptionsElement {
        src: string;
        mime: string;
    }


    export class MaskData {

        type: MASK_TYPES;

        autoDetect: boolean;

        maskObject: IMaskTarget;

        pooled: boolean;

        isMaskData: boolean;

        resolution: number;

        multisample: MSAA_QUALITY;

        enabled: boolean;

        _filters: ISpriteMaskFilter[];

        _stencilCounter: number;

        _scissorCounter: number;

        _scissorRect: Rectangle;

        _scissorRectLocal: Rectangle;

        _target: IMaskTarget;

        constructor(maskObject?: IMaskTarget);

        get filter(): ISpriteMaskFilter;
        set filter(value: ISpriteMaskFilter);

        reset(): void;

        copyCountersOrReset(maskAbove?: MaskData): void;
    }


    export class MaskSystem implements ISystem {

        enableScissor: boolean;

        protected readonly alphaMaskPool: Array<SpriteMaskFilter[]>;

        protected alphaMaskIndex: number;

        private readonly maskDataPool;
        private maskStack;
        private renderer;

        constructor(renderer: Renderer);

        setMaskStack(maskStack: Array<MaskData>): void;

        push(target: IMaskTarget, maskDataOrTarget: MaskData | IMaskTarget): void;

        pop(target: IMaskTarget): void;

        detect(maskData: MaskData): void;

        pushSpriteMask(maskData: MaskData): void;

        popSpriteMask(maskData: MaskData): void;
        destroy(): void;
    }


    export class ObjectRenderer implements ISystem {

        protected renderer: Renderer;

        constructor(renderer: Renderer);

        flush(): void;

        destroy(): void;

        start(): void;

        stop(): void;

        render(_object: any): void;
    }


    export class Program {
        id: number;

        vertexSrc: string;

        fragmentSrc: string;
        nameCache: any;
        glPrograms: {
            [key: number]: GLProgram;
        };
        syncUniforms: any;

        attributeData: {
            [key: string]: IAttributeData;
        };

        uniformData: {
            [key: string]: IUniformData;
        };

        constructor(vertexSrc?: string, fragmentSrc?: string, name?: string);

        static get defaultVertexSrc(): string;

        static get defaultFragmentSrc(): string;

        static from(vertexSrc?: string, fragmentSrc?: string, name?: string): Program;
    }


    export class ProjectionSystem implements ISystem {

        destinationFrame: Rectangle;

        sourceFrame: Rectangle;

        defaultFrame: Rectangle;

        projectionMatrix: Matrix;

        transform: Matrix;
        private renderer;

        constructor(renderer: Renderer);

        update(destinationFrame: Rectangle, sourceFrame: Rectangle, resolution: number, root: boolean): void;

        calculateProjection(_destinationFrame: Rectangle, sourceFrame: Rectangle, _resolution: number, root: boolean): void;

        setTransform(_matrix: Matrix): void;
        destroy(): void;
    }


    export class Quad extends Geometry {
        constructor();
    }


    export class QuadUv extends Geometry {
        vertexBuffer: Buffer_2;
        uvBuffer: Buffer_2;

        vertices: Float32Array;

        uvs: Float32Array;
        constructor();

        map(targetTextureFrame: Rectangle, destinationFrame: Rectangle): this;

        invalidate(): this;
    }


    export class Renderer extends AbstractRenderer {

        gl: IRenderingContext;

        globalUniforms: UniformGroup;

        CONTEXT_UID: number;

        renderingToScreen: boolean;

        multisample: MSAA_QUALITY;

        mask: MaskSystem;

        context: ContextSystem;

        state: StateSystem;

        shader: ShaderSystem;

        texture: TextureSystem;

        buffer: BufferSystem;

        geometry: GeometrySystem;

        framebuffer: FramebufferSystem;

        scissor: ScissorSystem;

        stencil: StencilSystem;

        projection: ProjectionSystem;

        textureGC: TextureGCSystem;

        filter: FilterSystem;

        renderTexture: RenderTextureSystem;

        batch: BatchSystem;

        runners: {
            [key: string]: Runner;
        };

        static create(options?: IRendererOptions): AbstractRenderer;

        constructor(options?: IRendererOptions);
        protected contextChange(): void;

        addSystem(ClassRef: ISystemConstructor, name: string): this;

        render(displayObject: IRenderableObject, options?: IRendererRenderOptions): void;

        render(displayObject: IRenderableObject, renderTexture?: RenderTexture, clear?: boolean, transform?: Matrix, skipUpdateTransform?: boolean): void;

        generateTexture(displayObject: IRenderableObject, options?: IGenerateTextureOptions | SCALE_MODES, resolution?: number, region?: Rectangle): RenderTexture;

        resize(desiredScreenWidth: number, desiredScreenHeight: number): void;

        reset(): this;

        clear(): void;

        destroy(removeView?: boolean): void;

        get extract(): any;

        static __plugins: IRendererPlugins;

        static registerPlugin(pluginName: string, ctor: IRendererPluginConstructor): void;
    }


    export class RenderTexture extends Texture {
        baseTexture: BaseRenderTexture;

        filterFrame: Rectangle | null;

        filterPoolKey: string | number | null;

        constructor(baseRenderTexture: BaseRenderTexture, frame?: Rectangle);

        get framebuffer(): Framebuffer;

        get multisample(): MSAA_QUALITY;
        set multisample(value: MSAA_QUALITY);

        resize(desiredWidth: number, desiredHeight: number, resizeBaseTexture?: boolean): void;

        setResolution(resolution: number): void;

        static create(width: number, height: number, scaleMode?: SCALE_MODES, resolution?: number): RenderTexture;

        static create(options?: IBaseTextureOptions): RenderTexture;
    }


    export class RenderTexturePool {
        textureOptions: IBaseTextureOptions;

        enableFullScreen: boolean;
        texturePool: {
            [x in string | number]: RenderTexture[];
        };
        private _pixelsWidth;
        private _pixelsHeight;

        constructor(textureOptions?: IBaseTextureOptions);

        createTexture(realWidth: number, realHeight: number, multisample?: MSAA_QUALITY): RenderTexture;

        getOptimalTexture(minWidth: number, minHeight: number, resolution?: number, multisample?: MSAA_QUALITY): RenderTexture;

        getFilterTexture(input: RenderTexture, resolution?: number, multisample?: MSAA_QUALITY): RenderTexture;

        returnTexture(renderTexture: RenderTexture): void;

        returnFilterTexture(renderTexture: RenderTexture): void;

        clear(destroyTextures?: boolean): void;

        setScreenSize(size: ISize): void;

        static SCREEN_KEY: number;
    }


    export class RenderTextureSystem implements ISystem {

        clearColor: number[];

        defaultMaskStack: Array<MaskData>;

        current: RenderTexture | null;

        readonly sourceFrame: Rectangle;

        readonly destinationFrame: Rectangle;

        readonly viewportFrame: Rectangle;
        private renderer;

        constructor(renderer: Renderer);

        bind(renderTexture?: RenderTexture, sourceFrame?: Rectangle, destinationFrame?: Rectangle): void;

        clear(clearColor?: number[], mask?: BUFFER_BITS): void;
        resize(): void;

        reset(): void;
        destroy(): void;
    }


    export abstract class Resource {

        destroyed: boolean;

        internal: boolean;

        protected _width: number;

        protected _height: number;

        protected onResize: Runner;

        protected onUpdate: Runner;

        protected onError: Runner;

        constructor(width?: number, height?: number);

        bind(baseTexture: BaseTexture): void;

        unbind(baseTexture: BaseTexture): void;

        resize(width: number, height: number): void;

        get valid(): boolean;

        update(): void;

        load(): Promise<Resource>;

        get width(): number;

        get height(): number;

        abstract upload(renderer: Renderer, baseTexture: BaseTexture, glTexture: GLTexture): boolean;

        style(_renderer: Renderer, _baseTexture: BaseTexture, _glTexture: GLTexture): boolean;

        dispose(): void;

        destroy(): void;

        static test(_source: unknown, _extension?: string): boolean;
    }


    export const resources: {};


    export class ScissorSystem extends AbstractMaskSystem {

        constructor(renderer: Renderer);
        getStackLength(): number;

        calcScissorRect(maskData: MaskData): void;
        private static isMatrixRotated;

        testScissor(maskData: MaskData): boolean;
        private roundFrameToPixels;

        push(maskData: MaskData): void;

        pop(): void;

        _useCurrent(): void;
    }


    export class Shader {

        program: Program;
        uniformGroup: UniformGroup;

        uniformBindCount: number;

        constructor(program: Program, uniforms?: Dict<any>);
        checkUniformExists(name: string, group: UniformGroup): boolean;
        destroy(): void;

        get uniforms(): Dict<any>;

        static from(vertexSrc?: string, fragmentSrc?: string, uniforms?: Dict<any>): Shader;
    }


    export class ShaderSystem implements ISystem {

        protected gl: IRenderingContext;
        shader: Shader;
        program: Program;
        id: number;
        destroyed: boolean;

        private cache;
        private _uboCache;
        private renderer;

        constructor(renderer: Renderer);

        systemCheck(): void;
        protected contextChange(gl: IRenderingContext): void;

        bind(shader: Shader, dontSync?: boolean): GLProgram;

        setUniforms(uniforms: Dict<any>): void;

        syncUniformGroup(group: UniformGroup, syncData?: any): void;

        syncUniforms(group: UniformGroup, glProgram: GLProgram, syncData: any): void;
        createSyncGroups(group: UniformGroup): UniformsSyncCallback_2;

        syncUniformBufferGroup(group: UniformGroup, name?: string): void;

        protected createSyncBufferGroup(group: UniformGroup, glProgram: GLProgram, name: string): UniformsSyncCallback_2;

        private getSignature;

        getGlProgram(): GLProgram;

        generateProgram(shader: Shader): GLProgram;

        reset(): void;

        destroy(): void;
    }


    export class SpriteMaskFilter extends Filter {

        _maskSprite: IMaskTarget;

        maskMatrix: Matrix;

        constructor(sprite: IMaskTarget);

        constructor(vertexSrc?: string, fragmentSrc?: string, uniforms?: Dict<any>);

        get maskSprite(): IMaskTarget;
        set maskSprite(value: IMaskTarget);

        apply(filterManager: FilterSystem, input: RenderTexture, output: RenderTexture, clearMode: CLEAR_MODES): void;
    }


    export class State {
        data: number;
        _blendMode: BLEND_MODES;
        _polygonOffset: number;
        constructor();

        get blend(): boolean;
        set blend(value: boolean);

        get offsets(): boolean;
        set offsets(value: boolean);

        get culling(): boolean;
        set culling(value: boolean);

        get depthTest(): boolean;
        set depthTest(value: boolean);

        get depthMask(): boolean;
        set depthMask(value: boolean);

        get clockwiseFrontFace(): boolean;
        set clockwiseFrontFace(value: boolean);

        get blendMode(): BLEND_MODES;
        set blendMode(value: BLEND_MODES);

        get polygonOffset(): number;
        set polygonOffset(value: number);
        toString(): string;
        static for2d(): State;
    }


    export class StateSystem implements ISystem {

        stateId: number;

        polygonOffset: number;

        blendMode: BLEND_MODES;

        protected _blendEq: boolean;

        protected gl: IRenderingContext;
        protected blendModes: number[][];

        protected readonly map: Array<(value: boolean) => void>;

        protected readonly checks: Array<(system: this, state: State) => void>;

        protected defaultState: State;
        constructor();
        contextChange(gl: IRenderingContext): void;

        set(state: State): void;

        forceState(state: State): void;

        setBlend(value: boolean): void;

        setOffset(value: boolean): void;

        setDepthTest(value: boolean): void;

        setDepthMask(value: boolean): void;

        setCullFace(value: boolean): void;

        setFrontFace(value: boolean): void;

        setBlendMode(value: number): void;

        setPolygonOffset(value: number, scale: number): void;

        reset(): void;

        updateCheck(func: (system: this, state: State) => void, value: boolean): void;

        private static checkBlendMode;

        private static checkPolygonOffset;

        destroy(): void;
    }


    export class StencilSystem extends AbstractMaskSystem {

        constructor(renderer: Renderer);
        getStackLength(): number;

        push(maskData: MaskData): void;

        pop(maskObject: IMaskTarget): void;

        _useCurrent(): void;
    }


    export class SVGResource extends BaseImageResource {

        readonly svg: string;

        readonly scale: number;

        readonly _overrideWidth: number;

        readonly _overrideHeight: number;

        private _resolve;

        private _load;

        private _crossorigin?;

        constructor(sourceBase64: string, options?: ISVGResourceOptions);
        load(): Promise<SVGResource>;

        private _loadSvg;

        static getSize(svgString?: string): ISize;

        dispose(): void;

        static test(source: unknown, extension?: string): boolean;

        static SVG_XML: RegExp;

        static SVG_SIZE: RegExp;
    }


    export class System implements ISystem {

        renderer: Renderer;

        constructor(renderer: Renderer);

        destroy(): void;
    }


    export const systems: {};

    export interface Texture extends GlobalMixins.Texture, EventEmitter {
    }


    export class Texture<R extends Resource = Resource> extends EventEmitter {

        baseTexture: BaseTexture<R>;

        orig: Rectangle;

        trim: Rectangle;

        valid: boolean;

        noFrame: boolean;

        defaultAnchor: Point;

        uvMatrix: TextureMatrix;
        protected _rotate: number;

        _updateID: number;

        _frame: Rectangle;

        _uvs: TextureUvs;

        textureCacheIds: Array<string>;

        constructor(baseTexture: BaseTexture<R>, frame?: Rectangle, orig?: Rectangle, trim?: Rectangle, rotate?: number, anchor?: IPointData);

        update(): void;

        onBaseTextureUpdated(baseTexture: BaseTexture): void;

        destroy(destroyBase?: boolean): void;

        clone(): Texture;

        updateUvs(): void;

        static from<R extends Resource = Resource, RO = any>(source: TextureSource, options?: IBaseTextureOptions<RO>, strict?: boolean): Texture<R>;

        static fromURL<R extends Resource = Resource, RO = any>(url: string, options?: IBaseTextureOptions<RO>): Promise<Texture<R>>;

        static fromBuffer(buffer: Float32Array | Uint8Array, width: number, height: number, options?: IBaseTextureOptions<ISize>): Texture<BufferResource>;

        static fromLoader<R extends Resource = Resource>(source: HTMLImageElement | HTMLCanvasElement | string, imageUrl: string, name?: string, options?: IBaseTextureOptions): Promise<Texture<R>>;

        static addToCache(texture: Texture, id: string): void;

        static removeFromCache(texture: string | Texture): Texture | null;

        get resolution(): number;

        get frame(): Rectangle;
        set frame(frame: Rectangle);

        get rotate(): number;
        set rotate(rotate: number);

        get width(): number;

        get height(): number;

        castToBaseTexture(): BaseTexture;
        static readonly EMPTY: Texture<CanvasResource>;
        static readonly WHITE: Texture<CanvasResource>;
    }


    export class TextureGCSystem implements ISystem {

        count: number;

        checkCount: number;

        maxIdle: number;

        checkCountMax: number;

        mode: GC_MODES;
        private renderer;

        constructor(renderer: Renderer);

        protected postrender(): void;

        run(): void;

        unload(displayObject: IUnloadableTexture): void;
        destroy(): void;
    }


    export class TextureMatrix {

        mapCoord: Matrix;

        clampOffset: number;

        clampMargin: number;

        readonly uClampFrame: Float32Array;

        readonly uClampOffset: Float32Array;

        _textureID: number;

        _updateID: number;
        _texture: Texture;

        isSimple: boolean;

        constructor(texture: Texture, clampMargin?: number);

        get texture(): Texture;
        set texture(value: Texture);

        multiplyUvs(uvs: Float32Array, out?: Float32Array): Float32Array;

        update(forceUpdate?: boolean): boolean;
    }

    export type TextureSource = string | BaseTexture | ImageSource;


    export class TextureSystem implements ISystem {

        boundTextures: BaseTexture[];

        managedTextures: Array<BaseTexture>;

        protected hasIntegerTextures: boolean;
        protected CONTEXT_UID: number;
        protected gl: IRenderingContext;
        protected internalFormats: {
            [type: number]: {
                [format: number]: number;
            };
        };
        protected webGLVersion: number;

        protected unknownTexture: BaseTexture;

        protected _unknownBoundTextures: boolean;

        currentLocation: number;
        emptyTextures: {
            [key: number]: GLTexture;
        };
        private renderer;

        constructor(renderer: Renderer);

        contextChange(): void;

        bind(texture: Texture | BaseTexture, location?: number): void;

        reset(): void;

        unbind(texture?: BaseTexture): void;

        ensureSamplerType(maxTextures: number): void;

        initTexture(texture: BaseTexture): GLTexture;
        initTextureType(texture: BaseTexture, glTexture: GLTexture): void;

        updateTexture(texture: BaseTexture): void;

        destroyTexture(texture: BaseTexture | Texture, skipRemove?: boolean): void;

        updateTextureStyle(texture: BaseTexture): void;

        setStyle(texture: BaseTexture, glTexture: GLTexture): void;
        destroy(): void;
    }


    export class TextureUvs {

        x0: number;

        y0: number;

        x1: number;

        y1: number;

        x2: number;

        y2: number;

        x3: number;

        y3: number;
        uvsFloat32: Float32Array;
        constructor();

        set(frame: Rectangle, baseFrame: ISize, rotate: number): void;
        toString(): string;
    }

    interface UBOElement {
        data: IUniformData;
        offset: number;
        dataLen: number;
        dirty: number;
    }


    export class UniformGroup<LAYOUT = Dict<any>> {

        readonly uniforms: LAYOUT;

        readonly group: boolean;

        id: number;
        syncUniforms: Dict<UniformsSyncCallback_2>;

        dirtyId: number;

        static: boolean;

        ubo: boolean;
        buffer?: Buffer_2;
        autoManage: boolean;

        constructor(uniforms: LAYOUT | Buffer_2, isStatic?: boolean, isUbo?: boolean);
        update(): void;
        add(name: string, uniforms: Dict<any>, _static?: boolean): void;
        static from(uniforms: Dict<any> | Buffer_2, _static?: boolean, _ubo?: boolean): UniformGroup;

        static uboFrom(uniforms: Dict<any> | Buffer_2, _static?: boolean): UniformGroup;
    }

    export const uniformParsers: IUniformParser[];

    export type UniformsSyncCallback = (...args: any[]) => void;

    type UniformsSyncCallback_2 = (...args: any[]) => void;


    export class VideoResource extends BaseImageResource {

        source: HTMLVideoElement;

        protected _autoUpdate: boolean;

        protected _isConnectedToTicker: boolean;
        protected _updateFPS: number;
        protected _msToNextUpdate: number;

        protected autoPlay: boolean;

        private _load;

        private _resolve;

        constructor(source?: HTMLVideoElement | Array<string | IVideoResourceOptionsElement> | string, options?: IVideoResourceOptions);

        update(_deltaTime?: number): void;

        load(): Promise<VideoResource>;

        private _onError;

        private _isSourcePlaying;

        private _isSourceReady;

        private _onPlayStart;

        private _onPlayStop;

        private _onCanPlay;

        dispose(): void;

        get autoUpdate(): boolean;
        set autoUpdate(value: boolean);

        get updateFPS(): number;
        set updateFPS(value: number);

        static test(source: unknown, extension?: string): source is HTMLVideoElement;

        static TYPES: Array<string>;

        static MIME_TYPES: Dict<string>;
    }


    export class ViewableBuffer {
        size: number;

        rawBinaryData: ArrayBuffer;

        uint32View: Uint32Array;

        float32View: Float32Array;
        private _int8View;
        private _uint8View;
        private _int16View;
        private _uint16View;
        private _int32View;

        constructor(length: number);

        constructor(arrayBuffer: ArrayBuffer);

        get int8View(): Int8Array;

        get uint8View(): Uint8Array;

        get int16View(): Int16Array;

        get uint16View(): Uint16Array;

        get int32View(): Int32Array;

        view(type: string): ITypedArray;

        destroy(): void;
        static sizeOf(type: string): number;
    }

    interface WEBGL_compressed_texture_atc {
        COMPRESSED_RGB_ATC_WEBGL: number;
        COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL: number;
        COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL: number;
    }

    interface WEBGL_compressed_texture_etc {
        COMPRESSED_R11_EAC: number;
        COMPRESSED_SIGNED_R11_EAC: number;
        COMPRESSED_RG11_EAC: number;
        COMPRESSED_SIGNED_RG11_EAC: number;
        COMPRESSED_RGB8_ETC2: number;
        COMPRESSED_RGBA8_ETC2_EAC: number;
        COMPRESSED_SRGB8_ETC2: number;
        COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: number;
        COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;
        COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;
    }

    interface WEBGL_compressed_texture_etc1 {
        COMPRESSED_RGB_ETC1_WEBGL: number;
    }

    interface WEBGL_compressed_texture_pvrtc {
        COMPRESSED_RGB_PVRTC_4BPPV1_IMG: number;
        COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: number;
        COMPRESSED_RGB_PVRTC_2BPPV1_IMG: number;
        COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: number;
    }

    interface WebGLExtensions {
        drawBuffers?: WEBGL_draw_buffers;
        depthTexture?: OES_texture_float;
        loseContext?: WEBGL_lose_context;
        vertexArrayObject?: OES_vertex_array_object;
        anisotropicFiltering?: EXT_texture_filter_anisotropic;
        uint32ElementIndex?: OES_element_index_uint;
        floatTexture?: OES_texture_float;
        floatTextureLinear?: OES_texture_float_linear;
        textureHalfFloat?: OES_texture_half_float;
        textureHalfFloatLinear?: OES_texture_half_float_linear;
        colorBufferFloat?: WEBGL_color_buffer_float;
        s3tc?: WEBGL_compressed_texture_s3tc;
        s3tc_sRGB?: WEBGL_compressed_texture_s3tc_srgb;
        etc?: WEBGL_compressed_texture_etc;
        etc1?: WEBGL_compressed_texture_etc1;
        pvrtc?: WEBGL_compressed_texture_pvrtc;
        atc?: WEBGL_compressed_texture_atc;
        astc?: WEBGL_compressed_texture_astc;
    }





    export class Bounds {

        minX: number;

        minY: number;

        maxX: number;

        maxY: number;
        rect: Rectangle;

        updateID: number;
        constructor();

        isEmpty(): boolean;

        clear(): void;

        getRectangle(rect?: Rectangle): Rectangle;

        addPoint(point: IPointData): void;

        addPointMatrix(matrix: Matrix, point: IPointData): void;

        addQuad(vertices: Float32Array): void;

        addFrame(transform: Transform, x0: number, y0: number, x1: number, y1: number): void;

        addFrameMatrix(matrix: Matrix, x0: number, y0: number, x1: number, y1: number): void;

        addVertexData(vertexData: Float32Array, beginOffset: number, endOffset: number): void;

        addVertices(transform: Transform, vertices: Float32Array, beginOffset: number, endOffset: number): void;

        addVerticesMatrix(matrix: Matrix, vertices: Float32Array, beginOffset: number, endOffset: number, padX?: number, padY?: number): void;

        addBounds(bounds: Bounds): void;

        addBoundsMask(bounds: Bounds, mask: Bounds): void;

        addBoundsMatrix(bounds: Bounds, matrix: Matrix): void;

        addBoundsArea(bounds: Bounds, area: Rectangle): void;

        pad(paddingX?: number, paddingY?: number): void;

        addFramePad(x0: number, y0: number, x1: number, y1: number, padX: number, padY: number): void;
    }

    export interface Container extends GlobalMixins.Container, DisplayObject {
    }


    export class Container extends DisplayObject {

        readonly children: DisplayObject[];

        sortableChildren: boolean;

        sortDirty: boolean;
        parent: Container;
        containerUpdateTransform: () => void;
        protected _width: number;
        protected _height: number;
        constructor();

        protected onChildrenChange(_length?: number): void;

        addChild<T extends DisplayObject[]>(...children: T): T[0];

        addChildAt<T extends DisplayObject>(child: T, index: number): T;

        swapChildren(child: DisplayObject, child2: DisplayObject): void;

        getChildIndex(child: DisplayObject): number;

        setChildIndex(child: DisplayObject, index: number): void;

        getChildAt(index: number): DisplayObject;

        removeChild<T extends DisplayObject[]>(...children: T): T[0];

        removeChildAt(index: number): DisplayObject;

        removeChildren(beginIndex?: number, endIndex?: number): DisplayObject[];

        sortChildren(): void;

        updateTransform(): void;

        calculateBounds(): void;

        getLocalBounds(rect?: Rectangle, skipChildrenUpdate?: boolean): Rectangle;

        protected _calculateBounds(): void;

        protected _renderWithCulling(renderer: Renderer): void;

        render(renderer: Renderer): void;

        protected renderAdvanced(renderer: Renderer): void;

        protected _render(_renderer: Renderer): void;

        destroy(options?: IDestroyOptions | boolean): void;

        get width(): number;
        set width(value: number);

        get height(): number;
        set height(value: number);
    }

    export interface DisplayObject extends Omit<GlobalMixins.DisplayObject, keyof EventEmitter>, EventEmitter {
    }


    export abstract class DisplayObject extends EventEmitter {
        abstract sortDirty: boolean;

        parent: Container;

        worldAlpha: number;

        transform: Transform;

        alpha: number;

        visible: boolean;

        renderable: boolean;

        cullable: boolean;

        cullArea: Rectangle;

        filterArea: Rectangle;

        filters: Filter[] | null;

        isSprite: boolean;

        isMask: boolean;

        _lastSortedIndex: number;

        _mask: Container | MaskData;

        _bounds: Bounds;

        _localBounds: Bounds;

        protected _zIndex: number;

        protected _enabledFilters: Filter[];

        protected _boundsID: number;

        protected _boundsRect: Rectangle;

        protected _localBoundsRect: Rectangle;

        protected _destroyed: boolean;

        private _maskRefCount;
        private tempDisplayObjectParent;
        displayObjectUpdateTransform: () => void;

        static mixin(source: Dict<any>): void;
        constructor();




        get destroyed(): boolean;

        abstract calculateBounds(): void;
        abstract removeChild(child: DisplayObject): void;

        abstract render(renderer: Renderer): void;

        protected _recursivePostUpdateTransform(): void;

        updateTransform(): void;

        getBounds(skipUpdate?: boolean, rect?: Rectangle): Rectangle;

        getLocalBounds(rect?: Rectangle): Rectangle;

        toGlobal<P extends IPointData = Point>(position: IPointData, point?: P, skipUpdate?: boolean): P;

        toLocal<P extends IPointData = Point>(position: IPointData, from?: DisplayObject, point?: P, skipUpdate?: boolean): P;

        setParent(container: Container): Container;

        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): this;

        destroy(_options?: IDestroyOptions | boolean): void;

        get _tempDisplayObjectParent(): TemporaryDisplayObject;

        enableTempParent(): Container;

        disableTempParent(cacheParent: Container): void;

        get x(): number;
        set x(value: number);

        get y(): number;
        set y(value: number);

        get worldTransform(): Matrix;

        get localTransform(): Matrix;

        get position(): ObservablePoint;
        set position(value: ObservablePoint);

        get scale(): ObservablePoint;
        set scale(value: ObservablePoint);

        get pivot(): ObservablePoint;
        set pivot(value: ObservablePoint);

        get skew(): ObservablePoint;
        set skew(value: ObservablePoint);

        get rotation(): number;
        set rotation(value: number);

        get angle(): number;
        set angle(value: number);

        get zIndex(): number;
        set zIndex(value: number);

        get worldVisible(): boolean;

        get mask(): Container | MaskData | null;
        set mask(value: Container | MaskData | null);
    }

    export interface IDestroyOptions {
        children?: boolean;
        texture?: boolean;
        baseTexture?: boolean;
    }


    export class TemporaryDisplayObject extends DisplayObject {
        calculateBounds: () => null;
        removeChild: (child: DisplayObject) => null;
        render: (renderer: Renderer) => null;
        sortDirty: boolean;
    }




    class Extract_2 implements IRendererPlugin {
        private renderer;

        constructor(renderer: Renderer);

        image(target: DisplayObject | RenderTexture, format?: string, quality?: number): HTMLImageElement;

        base64(target: DisplayObject | RenderTexture, format?: string, quality?: number): string;

        canvas(target: DisplayObject | RenderTexture): HTMLCanvasElement;

        pixels(target?: DisplayObject | RenderTexture): Uint8Array;

        destroy(): void;

        static arrayPostDivide(pixels: number[] | Uint8Array | Uint8ClampedArray, out: number[] | Uint8Array | Uint8ClampedArray): void;
    }
    export { Extract_2 as Extract }




    export class AlphaFilter extends Filter {

        constructor(alpha?: number);

        get alpha(): number;
        set alpha(value: number);
    }



    export class BlurFilter extends Filter {
        blurXFilter: BlurFilterPass;
        blurYFilter: BlurFilterPass;
        private _repeatEdgePixels;

        constructor(strength?: number, quality?: number, resolution?: number, kernelSize?: number);

        apply(filterManager: FilterSystem, input: RenderTexture, output: RenderTexture, clearMode: CLEAR_MODES): void;
        protected updatePadding(): void;

        get blur(): number;
        set blur(value: number);

        get quality(): number;
        set quality(value: number);

        get blurX(): number;
        set blurX(value: number);

        get blurY(): number;
        set blurY(value: number);

        get blendMode(): BLEND_MODES;
        set blendMode(value: BLEND_MODES);

        get repeatEdgePixels(): boolean;
        set repeatEdgePixels(value: boolean);
    }


    export class BlurFilterPass extends Filter {
        horizontal: boolean;
        strength: number;
        passes: number;
        private _quality;

        constructor(horizontal: boolean, strength?: number, quality?: number, resolution?: number, kernelSize?: number);

        apply(filterManager: FilterSystem, input: RenderTexture, output: RenderTexture, clearMode: CLEAR_MODES): void;

        get blur(): number;
        set blur(value: number);

        get quality(): number;
        set quality(value: number);
    }


    export type ColorMatrix = ArrayFixed<number, 20>;


    export class ColorMatrixFilter extends Filter {
        grayscale: (scale: number, multiply: boolean) => void;
        constructor();

        private _loadMatrix;

        private _multiply;

        private _colorMatrix;

        brightness(b: number, multiply: boolean): void;

        tint(color: number, multiply?: boolean): void;

        greyscale(scale: number, multiply: boolean): void;

        blackAndWhite(multiply: boolean): void;

        hue(rotation: number, multiply: boolean): void;

        contrast(amount: number, multiply: boolean): void;

        saturate(amount?: number, multiply?: boolean): void;

        desaturate(): void;

        negative(multiply: boolean): void;

        sepia(multiply: boolean): void;

        technicolor(multiply: boolean): void;

        polaroid(multiply: boolean): void;

        toBGR(multiply: boolean): void;

        kodachrome(multiply: boolean): void;

        browni(multiply: boolean): void;

        vintage(multiply: boolean): void;

        colorTone(desaturation: number, toned: number, lightColor: number, darkColor: number, multiply: boolean): void;

        night(intensity: number, multiply: boolean): void;

        predator(amount: number, multiply: boolean): void;

        lsd(multiply: boolean): void;

        reset(): void;

        get matrix(): ColorMatrix;
        set matrix(value: ColorMatrix);

        get alpha(): number;
        set alpha(value: number);
    }


    export class DisplacementFilter extends Filter {
        maskSprite: ISpriteMaskTarget;
        maskMatrix: Matrix;
        scale: Point;

        constructor(sprite: ISpriteMaskTarget, scale?: number);

        apply(filterManager: FilterSystem, input: RenderTexture, output: RenderTexture, clearMode: CLEAR_MODES): void;

        get map(): Texture;
        set map(value: Texture);
    }



    export class FXAAFilter extends Filter {
        constructor();
    }



    export class NoiseFilter extends Filter {

        constructor(noise?: number, seed?: number);

        get noise(): number;
        set noise(value: number);

        get seed(): number;
        set seed(value: number);
    }



    class ArcUtils {

        static curveTo(x1: number, y1: number, x2: number, y2: number, radius: number, points: Array<number>): IArcLikeShape;

        static arc(_startX: number, _startY: number, cx: number, cy: number, radius: number, startAngle: number, endAngle: number, _anticlockwise: boolean, points: Array<number>): void;
    }


    class BatchPart {
        style: LineStyle | FillStyle;
        start: number;
        size: number;
        attribStart: number;
        attribSize: number;
        constructor();

        begin(style: LineStyle | FillStyle, startIndex: number, attribStart: number): void;

        end(endIndex: number, endAttrib: number): void;
        reset(): void;
    }


    class BezierUtils {

        static curveLength(fromX: number, fromY: number, cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number): number;

        static curveTo(cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number, points: Array<number>): void;
    }


    function buildLine(graphicsData: GraphicsData, graphicsGeometry: GraphicsGeometry): void;


    export class FillStyle {

        color: number;

        alpha: number;

        texture: Texture;

        matrix: Matrix;

        visible: boolean;
        constructor();

        clone(): FillStyle;

        reset(): void;

        destroy(): void;
    }

    export interface Graphics extends GlobalMixins.Graphics, Container {
    }


    export class Graphics extends Container {

        static nextRoundedRectBehavior: boolean;

        static _TEMP_POINT: Point;

        shader: Shader;

        pluginName: string;

        currentPath: Polygon;

        protected batches: Array<IGraphicsBatchElement>;

        protected batchTint: number;

        protected batchDirty: number;

        protected vertexData: Float32Array;

        protected _fillStyle: FillStyle;

        protected _lineStyle: LineStyle;

        protected _matrix: Matrix;

        protected _holeMode: boolean;
        protected _transformID: number;
        protected _tint: number;

        private state;
        private _geometry;

        get geometry(): GraphicsGeometry;

        constructor(geometry?: GraphicsGeometry);

        clone(): Graphics;

        set blendMode(value: BLEND_MODES);
        get blendMode(): BLEND_MODES;

        get tint(): number;
        set tint(value: number);

        get fill(): FillStyle;

        get line(): LineStyle;

        lineStyle(width: number, color?: number, alpha?: number, alignment?: number, native?: boolean): this;

        lineStyle(options?: ILineStyleOptions): this;

        lineTextureStyle(options: ILineStyleOptions): this;

        protected startPoly(): void;

        finishPoly(): void;

        moveTo(x: number, y: number): this;

        lineTo(x: number, y: number): this;

        protected _initCurve(x?: number, y?: number): void;

        quadraticCurveTo(cpX: number, cpY: number, toX: number, toY: number): this;

        bezierCurveTo(cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number): this;

        arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): this;

        arc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): this;

        beginFill(color?: number, alpha?: number): this;

        beginTextureFill(options?: IFillStyleOptions): this;

        endFill(): this;

        drawRect(x: number, y: number, width: number, height: number): this;

        drawRoundedRect(x: number, y: number, width: number, height: number, radius: number): this;

        drawCircle(x: number, y: number, radius: number): this;

        drawEllipse(x: number, y: number, width: number, height: number): this;
        drawPolygon(...path: Array<number> | Array<Point>): this;
        drawPolygon(path: Array<number> | Array<Point> | Polygon): this;

        drawShape(shape: IShape): this;

        clear(): this;

        isFastRect(): boolean;

        protected _render(renderer: Renderer): void;

        protected _populateBatches(): void;

        protected _renderBatched(renderer: Renderer): void;

        protected _renderDirect(renderer: Renderer): void;

        protected _renderDrawCallDirect(renderer: Renderer, drawCall: BatchDrawCall): void;

        protected _resolveDirectShader(renderer: Renderer): Shader;

        protected _calculateBounds(): void;

        containsPoint(point: IPointData): boolean;

        protected calculateTints(): void;

        protected calculateVertices(): void;

        closePath(): this;

        setMatrix(matrix: Matrix): this;

        beginHole(): this;

        endHole(): this;

        destroy(options?: IDestroyOptions | boolean): void;
    }


    export const GRAPHICS_CURVES: IGraphicsCurvesSettings;


    export class GraphicsData {

        shape: IShape;

        lineStyle: LineStyle;

        fillStyle: FillStyle;

        matrix: Matrix;

        type: SHAPES;

        points: number[];

        holes: Array<GraphicsData>;

        constructor(shape: IShape, fillStyle?: FillStyle, lineStyle?: LineStyle, matrix?: Matrix);

        clone(): GraphicsData;

        destroy(): void;
    }


    export class GraphicsGeometry extends BatchGeometry {

        static BATCHABLE_SIZE: number;

        closePointEps: number;

        boundsPadding: number;
        uvsFloat32: Float32Array;
        indicesUint16: Uint16Array | Uint32Array;
        batchable: boolean;

        points: number[];

        colors: number[];

        uvs: number[];

        indices: number[];

        textureIds: number[];

        graphicsData: Array<GraphicsData>;

        drawCalls: Array<BatchDrawCall>;

        batchDirty: number;

        batches: Array<BatchPart>;

        protected dirty: number;

        protected cacheDirty: number;

        protected clearDirty: number;

        protected shapeIndex: number;

        protected _bounds: Bounds;

        protected boundsDirty: number;
        constructor();

        get bounds(): Bounds;

        protected invalidate(): void;

        clear(): GraphicsGeometry;

        drawShape(shape: IShape_2, fillStyle?: FillStyle, lineStyle?: LineStyle, matrix?: Matrix): GraphicsGeometry;

        drawHole(shape: IShape_2, matrix?: Matrix): GraphicsGeometry;

        destroy(): void;

        containsPoint(point: IPointData): boolean;

        updateBatches(allow32Indices?: boolean): void;

        protected _compareStyles(styleA: FillStyle | LineStyle, styleB: FillStyle | LineStyle): boolean;

        protected validateBatching(): boolean;

        protected packBatches(): void;

        protected isBatchable(): boolean;

        protected buildDrawCalls(): void;

        protected packAttributes(): void;

        protected processFill(data: GraphicsData): void;

        protected processLine(data: GraphicsData): void;

        protected processHoles(holes: Array<GraphicsData>): void;

        protected calculateBounds(): void;

        protected transformPoints(points: Array<number>, matrix: Matrix): void;

        protected addColors(colors: Array<number>, color: number, alpha: number, size: number, offset?: number): void;

        protected addTextureIds(textureIds: Array<number>, id: number, size: number, offset?: number): void;

        protected addUvs(verts: Array<number>, uvs: Array<number>, texture: Texture, start: number, size: number, matrix?: Matrix): void;

        protected adjustUvs(uvs: Array<number>, texture: Texture, start: number, size: number): void;
    }

    export const graphicsUtils: {
        buildPoly: IShapeBuildCommand;
        buildCircle: IShapeBuildCommand;
        buildRectangle: IShapeBuildCommand;
        buildRoundedRectangle: IShapeBuildCommand;
        buildLine: typeof buildLine;
        ArcUtils: typeof ArcUtils;
        BezierUtils: typeof BezierUtils;
        QuadraticUtils: typeof QuadraticUtils;
        BatchPart: typeof BatchPart;
        FILL_COMMANDS: Record<SHAPES, IShapeBuildCommand>;
        BATCH_POOL: BatchPart[];
        DRAW_CALL_POOL: BatchDrawCall[];
    };

    interface IArcLikeShape {
        cx: number;
        cy: number;
        radius: number;
        startAngle: number;
        endAngle: number;
        anticlockwise: boolean;
    }

    export interface IFillStyleOptions {
        color?: number;
        alpha?: number;
        texture?: Texture;
        matrix?: Matrix;
    }


    export interface IGraphicsBatchElement {
        vertexData: Float32Array;
        blendMode: BLEND_MODES;
        indices: Uint16Array | Uint32Array;
        uvs: Float32Array;
        alpha: number;
        worldAlpha: number;
        _batchRGB: number[];
        _tintRGB: number;
        _texture: Texture;
    }

    export interface IGraphicsCurvesSettings {
        adaptive: boolean;
        maxLength: number;
        minSegments: number;
        maxSegments: number;
        epsilon: number;
        _segmentsCount(length: number, defaultSegments?: number): number;
    }

    export interface ILineStyleOptions extends IFillStyleOptions {
        width?: number;
        alignment?: number;
        native?: boolean;
        cap?: LINE_CAP;
        join?: LINE_JOIN;
        miterLimit?: number;
    }

    type IShape_2 = Circle | Ellipse | Polygon | Rectangle | RoundedRectangle;

    interface IShapeBuildCommand {
        build(graphicsData: GraphicsData): void;
        triangulate(graphicsData: GraphicsData, target: GraphicsGeometry): void;
    }


    export enum LINE_CAP {
        BUTT = "butt",
        ROUND = "round",
        SQUARE = "square"
    }


    export enum LINE_JOIN {
        MITER = "miter",
        BEVEL = "bevel",
        ROUND = "round"
    }


    export class LineStyle extends FillStyle {

        width: number;

        alignment: number;

        native: boolean;

        cap: LINE_CAP;

        join: LINE_JOIN;

        miterLimit: number;

        clone(): LineStyle;

        reset(): void;
    }


    class QuadraticUtils {

        static curveLength(fromX: number, fromY: number, cpX: number, cpY: number, toX: number, toY: number): number;

        static curveTo(cpX: number, cpY: number, toX: number, toY: number, points: Array<number>): void;
    }


    type Cursor = 'auto' | 'default' | 'none' | 'context-menu' | 'help' | 'pointer' | 'progress' | 'wait' | 'cell' | 'crosshair' | 'text' | 'vertical-text' | 'alias' | 'copy' | 'move' | 'no-drop' | 'not-allowed' | 'e-resize' | 'n-resize' | 'ne-resize' | 'nw-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'w-resize' | 'ns-resize' | 'ew-resize' | 'nesw-resize' | 'col-resize' | 'nwse-resize' | 'row-resize' | 'all-scroll' | 'zoom-in' | 'zoom-out' | 'grab' | 'grabbing';

    export interface DelayedEvent {
        displayObject: DisplayObject;
        eventString: string;
        eventData: InteractionEvent;
    }

    export interface IHitArea {
        contains(x: number, y: number): boolean;
    }

    export type InteractionCallback = (interactionEvent: InteractionEvent, displayObject: DisplayObject, hit?: boolean) => void;


    export class InteractionData {

        global: Point;

        target: DisplayObject;

        originalEvent: InteractivePointerEvent;

        identifier: number;

        isPrimary: boolean;

        button: number;

        buttons: number;

        width: number;

        height: number;

        tiltX: number;

        tiltY: number;

        pointerType: string;

        pressure: number;

        rotationAngle: number;

        twist: number;

        tangentialPressure: number;
        constructor();

        get pointerId(): number;

        getLocalPosition<P extends IPointData = Point>(displayObject: DisplayObject, point?: P, globalPos?: IPointData): P;

        copyEvent(event: Touch | InteractivePointerEvent): void;

        reset(): void;
    }


    export class InteractionEvent {

        stopped: boolean;

        stopsPropagatingAt: DisplayObject;

        stopPropagationHint: boolean;

        target: DisplayObject;

        currentTarget: DisplayObject;

        type: string;

        data: InteractionData;
        constructor();

        stopPropagation(): void;

        reset(): void;
    }


    export class InteractionManager extends EventEmitter {

        readonly activeInteractionData: {
            [key: number]: InteractionData;
        };

        readonly supportsTouchEvents: boolean;

        readonly supportsPointerEvents: boolean;

        interactionDataPool: InteractionData[];

        cursor: string;

        delayedEvents: DelayedEvent[];

        search: TreeSearch;

        renderer: AbstractRenderer;

        autoPreventDefault: boolean;

        interactionFrequency: number;

        mouse: InteractionData;

        eventData: InteractionEvent;

        moveWhenInside: boolean;

        cursorStyles: Dict<string | ((mode: string) => void) | CSSStyleDeclaration>;

        currentCursorMode: string;

        resolution: number;

        protected interactionDOMElement: HTMLElement;

        protected eventsAdded: boolean;

        protected tickerAdded: boolean;

        protected mouseOverRenderer: boolean;
        private _useSystemTicker;
        private _deltaTime;
        private _didMove;

        private _tempDisplayObject;

        private readonly _eventListenerOptions;

        constructor(renderer: AbstractRenderer, options?: InteractionManagerOptions);

        get useSystemTicker(): boolean;
        set useSystemTicker(useSystemTicker: boolean);

        get lastObjectRendered(): DisplayObject;

        hitTest(globalPoint: Point, root?: DisplayObject): DisplayObject;

        setTargetElement(element: HTMLElement, resolution?: number): void;

        private addTickerListener;

        private removeTickerListener;

        private addEvents;

        private removeEvents;

        tickerUpdate(deltaTime: number): void;

        update(): void;

        setCursorMode(mode: string): void;

        private dispatchEvent;

        private delayDispatchEvent;

        mapPositionToPoint(point: IPointData, x: number, y: number): void;

        processInteractive(interactionEvent: InteractionEvent, displayObject: DisplayObject, func?: InteractionCallback, hitTest?: boolean): void;

        private onPointerDown;

        private processPointerDown;

        private onPointerComplete;

        private onPointerCancel;

        private processPointerCancel;

        private onPointerUp;

        private processPointerUp;

        private onPointerMove;

        private processPointerMove;

        private onPointerOut;

        private processPointerOverOut;

        private onPointerOver;

        private getInteractionDataForPointerId;

        private releaseInteractionDataForPointerId;

        private configureInteractionEventForDOMEvent;

        private normalizeToPointerData;

        destroy(): void;
    }

    export interface InteractionManagerOptions {
        autoPreventDefault?: boolean;
        interactionFrequency?: number;
        useSystemTicker?: boolean;
    }


    export class InteractionTrackingData {
        static FLAGS: Readonly<InteractionTrackingFlags>;
        private readonly _pointerId;
        private _flags;

        constructor(pointerId: number);

        private _doSet;

        get pointerId(): number;

        get flags(): number;
        set flags(flags: number);

        get none(): boolean;

        get over(): boolean;
        set over(yn: boolean);

        get rightDown(): boolean;
        set rightDown(yn: boolean);

        get leftDown(): boolean;
        set leftDown(yn: boolean);
    }

    export interface InteractionTrackingFlags {
        OVER: number;
        LEFT_DOWN: number;
        RIGHT_DOWN: number;
        NONE: number;
    }

    export type InteractivePointerEvent = PointerEvent | TouchEvent | MouseEvent;

    export interface InteractiveTarget {
        interactive: boolean;
        interactiveChildren: boolean;
        hitArea: IHitArea | null;
        cursor: Cursor | string;
        buttonMode: boolean;
        trackedPointers: {
            [x: number]: InteractionTrackingData;
        };
        _trackedPointers: {
            [x: number]: InteractionTrackingData;
        };
    }


    export const interactiveTarget: InteractiveTarget;


    class TreeSearch {
        private readonly _tempPoint;
        constructor();

        recursiveFindHit(interactionEvent: InteractionEvent, displayObject: DisplayObject, func?: InteractionCallback, hitTest?: boolean, interactive?: boolean): boolean;

        findHit(interactionEvent: InteractionEvent, displayObject: DisplayObject, func?: InteractionCallback, hitTest?: boolean): void;
    }



    export class AppLoaderPlugin {

        static loader: Loader;

        static init(options?: GlobalMixins.IApplicationOptions): void;

        static destroy(): void;
    }


    export interface IAddOptions {
        name?: string;
        key?: string;
        url?: string;
        crossOrigin?: string | boolean;
        timeout?: number;
        parentResource?: LoaderResource;
        loadType?: LoaderResource.LOAD_TYPE;
        xhrType?: LoaderResource.XHR_RESPONSE_TYPE;
        onComplete?: LoaderResource.OnCompleteSignal;
        callback?: LoaderResource.OnCompleteSignal;
        metadata?: IResourceMetadata;
    }

    export interface ILoaderAdd {
        (this: Loader, name: string, url: string, callback?: LoaderResource.OnCompleteSignal): Loader;
        (this: Loader, name: string, url: string, options?: IAddOptions, callback?: LoaderResource.OnCompleteSignal): Loader;
        (this: Loader, url: string, callback?: LoaderResource.OnCompleteSignal): Loader;
        (this: Loader, url: string, options?: IAddOptions, callback?: LoaderResource.OnCompleteSignal): Loader;
        (this: Loader, options: IAddOptions, callback?: LoaderResource.OnCompleteSignal): Loader;
        (this: Loader, resources: (IAddOptions | string)[], callback?: LoaderResource.OnCompleteSignal): Loader;
    }

    export type ILoaderMiddleware = (resource: LoaderResource, next: (...args: any[]) => void) => void;


    export interface ILoaderPlugin {

        add?(): void;

        pre?(resource: LoaderResource, next: (...args: any[]) => void): void;

        use?(resource: LoaderResource, next: (...args: any[]) => void): void;
    }


    export type ILoaderResource = LoaderResource;


    export interface IResourceMetadata extends GlobalMixins.IResourceMetadata, IBaseTextureOptions {

        loadElement?: HTMLImageElement | HTMLAudioElement | HTMLVideoElement;

        skipSource?: boolean;

        mimeType?: string | string[];

        imageMetadata?: IResourceMetadata;
    }


    export class Loader {

        baseUrl: string;

        progress: number;

        loading: boolean;

        defaultQueryString: string;

        private _beforeMiddleware;

        private _afterMiddleware;

        private _resourcesParsing;

        private _boundLoadResource;

        private _queue;

        resources: Dict<LoaderResource>;

        onProgress: Signal<Loader.OnProgressSignal>;

        onError: Signal<Loader.OnErrorSignal>;

        onLoad: Signal<Loader.OnLoadSignal>;

        onStart: Signal<Loader.OnStartSignal>;

        onComplete: Signal<Loader.OnCompleteSignal>;

        constructor(baseUrl?: string, concurrency?: number);

        add: ILoaderAdd;

        protected _add(name: string, url: string, options: IAddOptions, callback?: LoaderResource.OnCompleteSignal): this;

        pre(fn: ILoaderMiddleware): this;

        use(fn: ILoaderMiddleware): this;

        reset(): this;

        load(cb?: Loader.OnCompleteSignal): this;

        get concurrency(): number;
        set concurrency(concurrency: number);

        private _prepareUrl;

        private _loadResource;

        private _onStart;

        private _onComplete;

        private _onLoad;
        private static _plugins;
        private static _shared;

        private _protected;

        destroy(): void;

        static get shared(): Loader;

        static registerPlugin(plugin: ILoaderPlugin): typeof Loader;
    }

    export namespace Loader {

        export type OnStartSignal = (loader: Loader) => void;

        export type OnProgressSignal = (loader: Loader, resource: LoaderResource) => void;

        export type OnLoadSignal = (loader: Loader, resource: LoaderResource) => void;

        export type OnCompleteSignal = (loader: Loader, resources: Dict<LoaderResource>) => void;

        export type OnErrorSignal = (error: Error, loader: Loader, resource: LoaderResource) => void;
    }

    export interface LoaderResource extends GlobalMixins.LoaderResource, GlobalMixins.ILoaderResource {
    }


    export class LoaderResource {

        texture?: Texture;

        blob?: Blob;

        readonly name: string;

        readonly url: string;

        readonly extension: string;

        data: any;

        crossOrigin: string | boolean;

        timeout: number;

        loadType: LoaderResource.LOAD_TYPE;

        xhrType: string;

        metadata: IResourceMetadata;

        error: Error;

        xhr: XMLHttpRequest;
        private xdr;

        readonly children: LoaderResource[];

        type: LoaderResource.TYPE;

        progressChunk: number;

        onStart: Signal<LoaderResource.OnStartSignal>;

        onProgress: Signal<LoaderResource.OnProgressSignal>;

        onComplete: Signal<LoaderResource.OnCompleteSignal>;

        onAfterMiddleware: Signal<LoaderResource.OnCompleteSignal>;

        private _flags;

        _dequeue: any;

        _onLoadBinding: any;

        private _elementTimer;

        private _boundComplete;

        private _boundOnError;

        private _boundOnProgress;

        private _boundOnTimeout;
        private _boundXhrOnError;
        private _boundXhrOnTimeout;
        private _boundXhrOnAbort;
        private _boundXhrOnLoad;

        static setExtensionLoadType(extname: string, loadType: LoaderResource.LOAD_TYPE): void;

        static setExtensionXhrType(extname: string, xhrType: LoaderResource.XHR_RESPONSE_TYPE): void;

        constructor(name: string, url: string | string[], options?: {
            crossOrigin?: string | boolean;
            timeout?: number;
            loadType?: LoaderResource.LOAD_TYPE;
            xhrType?: LoaderResource.XHR_RESPONSE_TYPE;
            metadata?: IResourceMetadata;
        });





        get isDataUrl(): boolean;

        get isComplete(): boolean;

        get isLoading(): boolean;

        complete(): void;

        abort(message: string): void;

        load(cb?: LoaderResource.OnCompleteSignal): void;

        private _hasFlag;

        private _setFlag;

        private _clearEvents;

        private _finish;

        _loadElement(type: string): void;

        private _loadSourceElement;

        private _loadXhr;

        private _loadXdr;

        private _createSource;

        private _onError;

        private _onProgress;

        private _onTimeout;

        private _xhrOnError;

        private _xhrOnTimeout;

        private _xhrOnAbort;

        private _xhrOnLoad;

        _determineCrossOrigin(url: string, loc?: any): string;

        private _determineXhrType;

        private _determineLoadType;

        private _getExtension;

        _getMimeFromXhrType(type: LoaderResource.XHR_RESPONSE_TYPE): string;
    }

    export namespace LoaderResource {

        export type OnStartSignal = (resource: LoaderResource) => void;

        export type OnProgressSignal = (resource: LoaderResource, percentage: number) => void;

        export type OnCompleteSignal = (resource: LoaderResource) => void;

        export enum STATUS_FLAGS {

            NONE = 0,

            DATA_URL = 1,

            COMPLETE = 2,

            LOADING = 4
        }

        export enum TYPE {

            UNKNOWN = 0,

            JSON = 1,

            XML = 2,

            IMAGE = 3,

            AUDIO = 4,

            VIDEO = 5,

            TEXT = 6
        }

        export enum LOAD_TYPE {

            XHR = 1,

            IMAGE = 2,

            AUDIO = 3,

            VIDEO = 4
        }

        export enum XHR_RESPONSE_TYPE {

            DEFAULT = "text",

            BUFFER = "arraybuffer",

            BLOB = "blob",

            DOCUMENT = "document",

            JSON = "json",

            TEXT = "text"
        }
        const _loadTypeMap: Dict<number>;
        const _xhrTypeMap: Dict<XHR_RESPONSE_TYPE>;
        const EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    }


    class Signal<CbType = (...args: any) => void> {
        _head: SignalBinding<CbType>;
        _tail: SignalBinding<CbType>;

        constructor();

        handlers(exists?: boolean): Array<SignalBinding<CbType>> | boolean;

        has(node: SignalBinding<CbType>): boolean;

        dispatch(...args: any[]): boolean;

        add(fn: CbType, thisArg?: any): SignalBinding<CbType>;

        once(fn: CbType, thisArg?: any): SignalBinding<CbType>;

        detach(node: SignalBinding<CbType>): this;

        detachAll(): this;
    }


    class SignalBinding<CbType> {
        _fn: any;
        _once: boolean;
        _next: SignalBinding<CbType>;
        _prev: SignalBinding<CbType>;
        _owner: Signal<CbType>;
        _thisArg: any;

        constructor(fn: CbType, once: boolean, thisArg: any);
        detach(): boolean;
    }


    export class TextureLoader {

        static add(): void;

        static use(resource: LoaderResource, next: (...args: any[]) => void): void;
    }



    export class Circle {

        x: number;

        y: number;

        radius: number;

        readonly type: SHAPES.CIRC;

        constructor(x?: number, y?: number, radius?: number);

        clone(): Circle;

        contains(x: number, y: number): boolean;

        getBounds(): Rectangle;
        toString(): string;
    }


    export const DEG_TO_RAD: number;


    export class Ellipse {

        x: number;

        y: number;

        width: number;

        height: number;

        readonly type: SHAPES.ELIP;

        constructor(x?: number, y?: number, halfWidth?: number, halfHeight?: number);

        clone(): Ellipse;

        contains(x: number, y: number): boolean;

        getBounds(): Rectangle;
        toString(): string;
    }

    type GD8Symmetry = number;


    export const groupD8: {

        E: number;

        SE: number;

        S: number;

        SW: number;

        W: number;

        NW: number;

        N: number;

        NE: number;

        MIRROR_VERTICAL: number;

        MAIN_DIAGONAL: number;

        MIRROR_HORIZONTAL: number;

        REVERSE_DIAGONAL: number;

        uX: (ind: GD8Symmetry) => GD8Symmetry;

        uY: (ind: GD8Symmetry) => GD8Symmetry;

        vX: (ind: GD8Symmetry) => GD8Symmetry;

        vY: (ind: GD8Symmetry) => GD8Symmetry;

        inv: (rotation: GD8Symmetry) => GD8Symmetry;

        add: (rotationSecond: GD8Symmetry, rotationFirst: GD8Symmetry) => GD8Symmetry;

        sub: (rotationSecond: GD8Symmetry, rotationFirst: GD8Symmetry) => GD8Symmetry;

        rotate180: (rotation: number) => number;

        isVertical: (rotation: GD8Symmetry) => boolean;

        byDirection: (dx: number, dy: number) => GD8Symmetry;

        matrixAppendRotationInv: (matrix: Matrix, rotation: GD8Symmetry, tx?: number, ty?: number) => void;
    };

    export interface IPoint extends IPointData {
        copyFrom(p: IPointData): this;
        copyTo<T extends IPoint>(p: T): T;
        equals(p: IPointData): boolean;
        set(x?: number, y?: number): void;
    }

    export interface IPointData extends GlobalMixins.IPointData {
        x: number;
        y: number;
    }

    export type IShape = Circle | Ellipse | Polygon | Rectangle | RoundedRectangle;

    export interface ISize {
        width: number;
        height: number;
    }


    export class Matrix {

        a: number;

        b: number;

        c: number;

        d: number;

        tx: number;

        ty: number;
        array: Float32Array | null;

        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);

        fromArray(array: number[]): void;

        set(a: number, b: number, c: number, d: number, tx: number, ty: number): this;

        toArray(transpose: boolean, out?: Float32Array): Float32Array;

        apply<P extends IPointData = Point>(pos: IPointData, newPos?: P): P;

        applyInverse<P extends IPointData = Point>(pos: IPointData, newPos?: P): P;

        translate(x: number, y: number): this;

        scale(x: number, y: number): this;

        rotate(angle: number): this;

        append(matrix: Matrix): this;

        setTransform(x: number, y: number, pivotX: number, pivotY: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number): this;

        prepend(matrix: Matrix): this;

        decompose(transform: Transform): Transform;

        invert(): this;

        identity(): this;

        clone(): Matrix;

        copyTo(matrix: Matrix): Matrix;

        copyFrom(matrix: Matrix): this;
        toString(): string;

        static get IDENTITY(): Matrix;

        static get TEMP_MATRIX(): Matrix;
    }

    export interface ObservablePoint extends GlobalMixins.Point, IPoint {
    }


    export class ObservablePoint<T = any> implements IPoint {

        cb: (this: T) => any;

        scope: any;
        _x: number;
        _y: number;

        constructor(cb: (this: T) => any, scope: T, x?: number, y?: number);

        clone(cb?: (this: T) => any, scope?: any): ObservablePoint;

        set(x?: number, y?: number): this;

        copyFrom(p: IPointData): this;

        copyTo<T extends IPoint>(p: T): T;

        equals(p: IPointData): boolean;
        toString(): string;

        get x(): number;
        set x(value: number);

        get y(): number;
        set y(value: number);
    }


    export const PI_2: number;

    export interface Point extends GlobalMixins.Point, IPoint {
    }


    export class Point implements IPoint {

        x: number;

        y: number;

        constructor(x?: number, y?: number);

        clone(): Point;

        copyFrom(p: IPointData): this;

        copyTo<T extends IPoint>(p: T): T;

        equals(p: IPointData): boolean;

        set(x?: number, y?: number): this;
        toString(): string;
    }


    export class Polygon {

        points: number[];

        closeStroke: boolean;

        readonly type: SHAPES.POLY;
        constructor(points: IPointData[] | number[]);
        constructor(...points: IPointData[] | number[]);

        clone(): Polygon;

        contains(x: number, y: number): boolean;
        toString(): string;
    }


    export const RAD_TO_DEG: number;

    export interface Rectangle extends GlobalMixins.Rectangle {
    }



    export class Rectangle {

        x: number;

        y: number;

        width: number;

        height: number;

        readonly type: SHAPES.RECT;

        constructor(x?: number, y?: number, width?: number, height?: number);

        get left(): number;

        get right(): number;

        get top(): number;

        get bottom(): number;

        static get EMPTY(): Rectangle;

        clone(): Rectangle;

        copyFrom(rectangle: Rectangle): Rectangle;

        copyTo(rectangle: Rectangle): Rectangle;

        contains(x: number, y: number): boolean;

        intersects(other: Rectangle, transform?: Matrix): boolean;

        pad(paddingX?: number, paddingY?: number): this;

        fit(rectangle: Rectangle): this;

        ceil(resolution?: number, eps?: number): this;

        enlarge(rectangle: Rectangle): this;
        toString(): string;
    }


    export class RoundedRectangle {

        x: number;

        y: number;

        width: number;

        height: number;

        radius: number;

        readonly type: SHAPES.RREC;

        constructor(x?: number, y?: number, width?: number, height?: number, radius?: number);

        clone(): RoundedRectangle;

        contains(x: number, y: number): boolean;
        toString(): string;
    }


    export enum SHAPES {
        POLY = 0,
        RECT = 1,
        CIRC = 2,
        ELIP = 3,
        RREC = 4
    }

    export interface Transform extends GlobalMixins.Transform {
    }


    export class Transform {

        static readonly IDENTITY: Transform;

        worldTransform: Matrix;

        localTransform: Matrix;

        position: ObservablePoint;

        scale: ObservablePoint;

        pivot: ObservablePoint;

        skew: ObservablePoint;

        _parentID: number;

        _worldID: number;

        protected _rotation: number;

        protected _cx: number;

        protected _sx: number;

        protected _cy: number;

        protected _sy: number;

        protected _localID: number;

        protected _currentLocalID: number;
        constructor();

        protected onChange(): void;

        protected updateSkew(): void;
        toString(): string;

        updateLocalTransform(): void;

        updateTransform(parentTransform: Transform): void;

        setFromMatrix(matrix: Matrix): void;

        get rotation(): number;
        set rotation(value: number);
    }



    export interface IMeshMaterialOptions {
        alpha?: number;
        tint?: number;
        pluginName?: string;
        program?: Program;
        uniforms?: Dict<unknown>;
    }

    export interface Mesh extends GlobalMixins.Mesh {
    }


    export class Mesh<T extends Shader = MeshMaterial> extends Container {

        shader: T;

        state: State;

        drawMode: DRAW_MODES;

        start: number;

        size: number;
        private _geometry;

        private vertexData;

        private vertexDirty;
        private _transformID;

        private _roundPixels;

        private batchUvs;

        uvs: Float32Array;

        indices: Uint16Array;
        _tintRGB: number;
        _texture: Texture;

        constructor(geometry: Geometry, shader: T, state?: State, drawMode?: DRAW_MODES);

        get geometry(): Geometry;
        set geometry(value: Geometry);

        get uvBuffer(): Buffer_2;

        get verticesBuffer(): Buffer_2;

        set material(value: T);
        get material(): T;

        set blendMode(value: BLEND_MODES);
        get blendMode(): BLEND_MODES;

        set roundPixels(value: boolean);
        get roundPixels(): boolean;

        get tint(): number;
        set tint(value: number);

        get texture(): Texture;
        set texture(value: Texture);

        protected _render(renderer: Renderer): void;

        protected _renderDefault(renderer: Renderer): void;

        protected _renderToBatch(renderer: Renderer): void;

        calculateVertices(): void;

        calculateUvs(): void;

        protected _calculateBounds(): void;

        containsPoint(point: IPointData): boolean;
        destroy(options?: IDestroyOptions | boolean): void;

        static BATCHABLE_SIZE: number;
    }


    export class MeshBatchUvs {

        readonly data: Float32Array;

        uvBuffer: Buffer_2;

        uvMatrix: TextureMatrix;
        private _bufferUpdateId;
        private _textureUpdateId;
        _updateID: number;

        constructor(uvBuffer: Buffer_2, uvMatrix: TextureMatrix);

        update(forceUpdate?: boolean): void;
    }


    export class MeshGeometry extends Geometry {

        _updateId: number;

        constructor(vertices?: IArrayBuffer, uvs?: IArrayBuffer, index?: IArrayBuffer);

        get vertexDirtyId(): number;
    }

    export interface MeshMaterial extends GlobalMixins.MeshMaterial {
    }


    export class MeshMaterial extends Shader {

        readonly uvMatrix: TextureMatrix;

        batchable: boolean;

        pluginName: string;
        _tintRGB: number;

        private _colorDirty;
        private _alpha;
        private _tint;

        constructor(uSampler: Texture, options?: IMeshMaterialOptions);

        get texture(): Texture;
        set texture(value: Texture);

        set alpha(value: number);
        get alpha(): number;

        set tint(value: number);
        get tint(): number;

        update(): void;
    }


    export interface NineSlicePlane extends GlobalMixins.NineSlicePlane {
    }


    export class NineSlicePlane extends SimplePlane {
        private _origWidth;
        private _origHeight;

        _leftWidth: number;

        _rightWidth: number;

        _topHeight: number;

        _bottomHeight: number;

        constructor(texture: Texture, leftWidth?: number, topHeight?: number, rightWidth?: number, bottomHeight?: number);
        textureUpdated(): void;
        get vertices(): ITypedArray;
        set vertices(value: ITypedArray);

        updateHorizontalVertices(): void;

        updateVerticalVertices(): void;

        private _getMinScale;

        get width(): number;
        set width(value: number);

        get height(): number;
        set height(value: number);

        get leftWidth(): number;
        set leftWidth(value: number);

        get rightWidth(): number;
        set rightWidth(value: number);

        get topHeight(): number;
        set topHeight(value: number);

        get bottomHeight(): number;
        set bottomHeight(value: number);

        private _refresh;
    }


    export class PlaneGeometry extends MeshGeometry {
        segWidth: number;
        segHeight: number;
        width: number;
        height: number;

        constructor(width?: number, height?: number, segWidth?: number, segHeight?: number);

        build(): void;
    }


    export class RopeGeometry extends MeshGeometry {

        points: IPoint[];

        readonly textureScale: number;

        _width: number;

        constructor(width: number, points: IPoint[], textureScale?: number);

        get width(): number;

        private build;

        updateVertices(): void;
        update(): void;
    }


    export class SimpleMesh extends Mesh {

        autoUpdate: boolean;

        constructor(texture?: Texture, vertices?: IArrayBuffer, uvs?: IArrayBuffer, indices?: IArrayBuffer, drawMode?: DRAW_MODES);

        get vertices(): ITypedArray;
        set vertices(value: ITypedArray);
        _render(renderer: Renderer): void;
    }


    export class SimplePlane extends Mesh {

        autoResize: boolean;
        protected _textureID: number;

        constructor(texture: Texture, verticesX: number, verticesY: number);

        textureUpdated(): void;
        set texture(value: Texture);
        get texture(): Texture;
        _render(renderer: Renderer): void;
        destroy(options?: IDestroyOptions | boolean): void;
    }


    export class SimpleRope extends Mesh {
        autoUpdate: boolean;

        constructor(texture: Texture, points: IPoint[], textureScale?: number);
        _render(renderer: Renderer): void;
    }


    export class CacheData {
        textureCacheId: string;
        originalRender: (renderer: Renderer) => void;
        originalRenderCanvas: (renderer: AbstractRenderer) => void;
        originalCalculateBounds: () => void;
        originalGetLocalBounds: (rect?: Rectangle) => Rectangle;
        originalUpdateTransform: () => void;
        originalDestroy: (options?: IDestroyOptions | boolean) => void;
        originalMask: Container | MaskData;
        originalFilterArea: Rectangle;
        originalContainsPoint: (point: IPointData) => boolean;
        sprite: Sprite;
        constructor();
    }


    export interface IParticleProperties {
        vertices?: boolean;
        position?: boolean;
        rotation?: boolean;
        uvs?: boolean;
        tint?: boolean;
        alpha?: boolean;
        scale?: boolean;
    }

    export interface IParticleRendererProperty {
        attributeName: string;
        size: number;
        type?: TYPES;
        uploadFunction: (...params: any[]) => any;
        offset: number;
    }


    class ParticleBuffer {
        geometry: Geometry;
        staticStride: number;
        staticBuffer: Buffer_2;
        staticData: Float32Array;
        staticDataUint32: Uint32Array;
        dynamicStride: number;
        dynamicBuffer: Buffer_2;
        dynamicData: Float32Array;
        dynamicDataUint32: Uint32Array;
        _updateID: number;

        indexBuffer: Buffer_2;

        private size;

        private dynamicProperties;

        private staticProperties;

        constructor(properties: IParticleRendererProperty[], dynamicPropertyFlags: boolean[], size: number);

        private initBuffers;

        uploadDynamic(children: DisplayObject[], startIndex: number, amount: number): void;

        uploadStatic(children: DisplayObject[], startIndex: number, amount: number): void;

        destroy(): void;
    }


    export class ParticleContainer extends Container {

        blendMode: BLEND_MODES;

        autoResize: boolean;

        roundPixels: boolean;

        baseTexture: BaseTexture;
        tintRgb: Float32Array;

        _maxSize: number;

        _buffers: ParticleBuffer[];

        _batchSize: number;

        _properties: boolean[];

        _bufferUpdateIDs: number[];

        _updateID: number;

        private _tint;

        constructor(maxSize?: number, properties?: IParticleProperties, batchSize?: number, autoResize?: boolean);

        setProperties(properties: IParticleProperties): void;
        updateTransform(): void;

        get tint(): number;
        set tint(value: number);

        render(renderer: Renderer): void;

        protected onChildrenChange(smallestChildIndex: number): void;
        dispose(): void;

        destroy(options?: IDestroyOptions | boolean): void;
    }


    export class ParticleRenderer extends ObjectRenderer {

        readonly state: State;

        shader: Shader;
        tempMatrix: Matrix;
        properties: IParticleRendererProperty[];

        constructor(renderer: Renderer);

        render(container: ParticleContainer): void;

        private generateBuffers;

        private _generateOneMoreBuffer;

        uploadVertices(children: DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;

        uploadPosition(children: DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;

        uploadRotation(children: DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;

        uploadUvs(children: DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;

        uploadTint(children: DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;

        destroy(): void;
    }



    export class BasePrepare {

        private limiter;

        protected renderer: AbstractRenderer;

        protected uploadHookHelper: any;

        protected queue: Array<any>;

        addHooks: Array<any>;

        uploadHooks: Array<any>;

        completes: Array<any>;

        ticking: boolean;

        private delayedTick;

        constructor(renderer: AbstractRenderer);

        upload(item: IDisplayObjectExtended | Container | BaseTexture | Texture | (() => void), done?: () => void): void;

        tick(): void;

        prepareItems(): void;

        registerFindHook(addHook: IFindHook): this;

        registerUploadHook(uploadHook: IUploadHook): this;

        add(item: IDisplayObjectExtended | Container | BaseTexture | Texture): this;

        destroy(): void;
    }


    export class CountLimiter {

        maxItemsPerFrame: number;

        itemsLeft: number;

        constructor(maxItemsPerFrame: number);

        beginFrame(): void;

        allowedToUpload(): boolean;
    }

    export interface IDisplayObjectExtended extends DisplayObject {
        _textures?: Array<Texture>;
        _texture?: Texture;
        style?: TextStyle | Partial<TextStyle>;
    }

    interface IFindHook {
        (item: any, queue: Array<any>): boolean;
    }

    interface IUploadHook {
        (helper: AbstractRenderer | BasePrepare, item: IDisplayObjectExtended): boolean;
    }


    export class Prepare extends BasePrepare {

        constructor(renderer: Renderer);
    }


    export class TimeLimiter {

        maxMilliseconds: number;

        frameStart: number;

        constructor(maxMilliseconds: number);

        beginFrame(): void;

        allowedToUpload(): boolean;
    }



    export class Runner {
        items: any[];
        private _name;
        private _aliasCount;

        constructor(name: string);

        emit(a0?: unknown, a1?: unknown, a2?: unknown, a3?: unknown, a4?: unknown, a5?: unknown, a6?: unknown, a7?: unknown): this;
        private ensureNonAliasedItems;

        add(item: unknown): this;

        remove(item: unknown): this;

        contains(item: unknown): boolean;

        removeAll(): this;

        destroy(): void;

        get empty(): boolean;

        get name(): string;
    }


    export interface IRenderOptions {
        view: HTMLCanvasElement;
        antialias: boolean;
        autoDensity: boolean;
        backgroundColor: number;
        backgroundAlpha: number;
        useContextAlpha: boolean | 'notMultiplied';
        clearBeforeRender: boolean;
        preserveDrawingBuffer: boolean;
        width: number;
        height: number;
        legacy: boolean;
    }

    export interface ISettings {
        MIPMAP_TEXTURES: MIPMAP_MODES;
        ANISOTROPIC_LEVEL: number;
        RESOLUTION: number;
        FILTER_RESOLUTION: number;
        FILTER_MULTISAMPLE: MSAA_QUALITY;
        SPRITE_MAX_TEXTURES: number;
        SPRITE_BATCH_SIZE: number;
        RENDER_OPTIONS: IRenderOptions;
        GC_MODE: GC_MODES;
        GC_MAX_IDLE: number;
        GC_MAX_CHECK_COUNT: number;
        WRAP_MODE: WRAP_MODES;
        SCALE_MODE: SCALE_MODES;
        PRECISION_VERTEX: PRECISION;
        PRECISION_FRAGMENT: PRECISION;
        CAN_UPLOAD_SAME_BUFFER: boolean;
        CREATE_IMAGE_BITMAP: boolean;
        ROUND_PIXELS: boolean;
        RETINA_PREFIX?: RegExp;
        FAIL_IF_MAJOR_PERFORMANCE_CAVEAT?: boolean;
        UPLOADS_PER_FRAME?: number;
        SORTABLE_CHILDREN?: boolean;
        PREFER_ENV?: ENV;
        STRICT_TEXTURE_CACHE?: boolean;
        MESH_CANVAS_PADDING?: number;
        TARGET_FPMS?: number;
    }




    export const settings: ISettings;


    export interface Sprite extends GlobalMixins.Sprite, Container {
    }


    export class Sprite extends Container {

        blendMode: BLEND_MODES;
        indices: Uint16Array;

        pluginName: string;

        _width: number;

        _height: number;

        _texture: Texture;
        _textureID: number;

        _cachedTint: number;
        protected _textureTrimmedID: number;

        protected uvs: Float32Array;

        protected _anchor: ObservablePoint;

        protected vertexData: Float32Array;

        private vertexTrimmedData;

        private _roundPixels;
        private _transformID;
        private _transformTrimmedID;

        private _tint;

        _tintRGB: number;

        constructor(texture?: Texture);

        protected _onTextureUpdate(): void;

        private _onAnchorUpdate;

        calculateVertices(): void;

        calculateTrimmedVertices(): void;

        protected _render(renderer: Renderer): void;

        protected _calculateBounds(): void;

        getLocalBounds(rect?: Rectangle): Rectangle;

        containsPoint(point: IPointData): boolean;

        destroy(options?: IDestroyOptions | boolean): void;

        static from(source: SpriteSource, options?: IBaseTextureOptions): Sprite;

        set roundPixels(value: boolean);
        get roundPixels(): boolean;

        get width(): number;
        set width(value: number);

        get height(): number;
        set height(value: number);

        get anchor(): ObservablePoint;
        set anchor(value: ObservablePoint);

        get tint(): number;
        set tint(value: number);

        get texture(): Texture;
        set texture(value: Texture);
    }

    export type SpriteSource = TextureSource | Texture;



    export class AnimatedSprite extends Sprite {

        animationSpeed: number;

        loop: boolean;

        updateAnchor: boolean;

        onComplete?: () => void;

        onFrameChange?: (currentFrame: number) => void;

        onLoop?: () => void;
        private _playing;
        private _textures;
        private _durations;

        private _autoUpdate;

        private _isConnectedToTicker;

        private _currentTime;

        private _previousFrame;

        constructor(textures: Texture[] | FrameObject[], autoUpdate?: boolean);

        stop(): void;

        play(): void;

        gotoAndStop(frameNumber: number): void;

        gotoAndPlay(frameNumber: number): void;

        update(deltaTime: number): void;

        private updateTexture;

        destroy(options?: IDestroyOptions | boolean): void;

        static fromFrames(frames: string[]): AnimatedSprite;

        static fromImages(images: string[]): AnimatedSprite;

        get totalFrames(): number;

        get textures(): Texture[] | FrameObject[];
        set textures(value: Texture[] | FrameObject[]);

        get currentFrame(): number;

        get playing(): boolean;

        get autoUpdate(): boolean;
        set autoUpdate(value: boolean);
    }


    export interface FrameObject {

        texture: Texture;

        time: number;
    }


    export interface TilingSprite extends GlobalMixins.TilingSprite {
    }


    export class TilingSprite extends Sprite {

        tileTransform: Transform;

        uvMatrix: TextureMatrix;

        uvRespectAnchor: boolean;

        constructor(texture: Texture, width?: number, height?: number);

        get clampMargin(): number;
        set clampMargin(value: number);

        get tileScale(): ObservablePoint;
        set tileScale(value: ObservablePoint);

        get tilePosition(): ObservablePoint;
        set tilePosition(value: ObservablePoint);

        protected _onTextureUpdate(): void;

        protected _render(renderer: Renderer): void;

        protected _calculateBounds(): void;

        getLocalBounds(rect?: Rectangle): Rectangle;

        containsPoint(point: IPointData): boolean;

        destroy(options?: IDestroyOptions | boolean): void;

        static from(source: TextureSource, options: ISize & IBaseTextureOptions): TilingSprite;

        get width(): number;
        set width(value: number);

        get height(): number;
        set height(value: number);
    }


    export class TilingSpriteRenderer extends ObjectRenderer {
        shader: Shader;
        simpleShader: Shader;
        quad: QuadUv;
        readonly state: State;

        constructor(renderer: Renderer);

        contextChange(): void;

        render(ts: TilingSprite): void;
    }


    export interface ISpritesheetData {
        frames: Dict<ISpritesheetFrameData>;
        animations?: Dict<string[]>;
        meta: {
            scale: string;
        };
    }


    export interface ISpritesheetFrameData {
        frame: {
            x: number;
            y: number;
            w: number;
            h: number;
        };
        trimmed?: boolean;
        rotated?: boolean;
        sourceSize?: {
            w: number;
            h: number;
        };
        spriteSourceSize?: {
            x: number;
            y: number;
        };
        anchor?: IPointData;
    }


    export class Spritesheet {

        static readonly BATCH_SIZE = 1000;

        baseTexture: BaseTexture;

        textures: Dict<Texture>;

        animations: Dict<Texture[]>;

        data: ISpritesheetData;

        resolution: number;

        private _texture;

        private _frames;

        private _frameKeys;

        private _batchIndex;

        private _callback;

        constructor(texture: BaseTexture | Texture, data: ISpritesheetData, resolutionFilename?: string);

        private _updateResolution;

        parse(callback: (textures?: Dict<Texture>) => void): void;

        private _processFrames;

        private _processAnimations;

        private _parseComplete;

        private _nextBatch;

        destroy(destroyBase?: boolean): void;
    }


    export class SpritesheetLoader {

        static use(resource: LoaderResource, next: (...args: unknown[]) => void): void;

        static getResourcePath(resource: LoaderResource, baseUrl: string): string;
    }


    interface IFontMetrics {
        ascent: number;
        descent: number;
        fontSize: number;
    }

    export interface ITextStyle {
        align: TextStyleAlign;
        breakWords: boolean;
        dropShadow: boolean;
        dropShadowAlpha: number;
        dropShadowAngle: number;
        dropShadowBlur: number;
        dropShadowColor: string | number;
        dropShadowDistance: number;
        fill: TextStyleFill;
        fillGradientType: TEXT_GRADIENT;
        fillGradientStops: number[];
        fontFamily: string | string[];
        fontSize: number | string;
        fontStyle: TextStyleFontStyle;
        fontVariant: TextStyleFontVariant;
        fontWeight: TextStyleFontWeight;
        letterSpacing: number;
        lineHeight: number;
        lineJoin: TextStyleLineJoin;
        miterLimit: number;
        padding: number;
        stroke: string | number;
        strokeThickness: number;
        textBaseline: TextStyleTextBaseline;
        trim: boolean;
        whiteSpace: TextStyleWhiteSpace;
        wordWrap: boolean;
        wordWrapWidth: number;
        leading: number;
    }

    interface ModernContext2D extends CanvasRenderingContext2D {
        textLetterSpacing?: number;
        letterSpacing?: number;
    }


    class Text_2 extends Sprite {

        static nextLineHeightBehavior: boolean;

        static experimentalLetterSpacing: boolean;

        canvas: HTMLCanvasElement;

        context: ModernContext2D;
        localStyleID: number;
        dirty: boolean;

        _resolution: number;
        _autoResolution: boolean;

        protected _text: string;

        protected _font: string;

        protected _style: TextStyle;

        protected _styleListener: () => void;

        private _ownCanvas;

        constructor(text: string, style?: Partial<ITextStyle> | TextStyle, canvas?: HTMLCanvasElement);

        updateText(respectDirty: boolean): void;

        private drawLetterSpacing;

        private updateTexture;

        protected _render(renderer: Renderer): void;

        getLocalBounds(rect: Rectangle): Rectangle;

        protected _calculateBounds(): void;

        private _generateFillStyle;

        destroy(options?: IDestroyOptions | boolean): void;

        get width(): number;
        set width(value: number);

        get height(): number;
        set height(value: number);

        get style(): TextStyle | Partial<ITextStyle>;
        set style(style: TextStyle | Partial<ITextStyle>);

        get text(): string;
        set text(text: string);

        get resolution(): number;
        set resolution(value: number);
    }
    export { Text_2 as Text }


    export enum TEXT_GRADIENT {
        LINEAR_VERTICAL = 0,
        LINEAR_HORIZONTAL = 1
    }


    class TextMetrics_2 {

        text: string;

        style: TextStyle;

        width: number;

        height: number;

        lines: string[];

        lineWidths: number[];

        lineHeight: number;

        maxLineWidth: number;

        fontProperties: IFontMetrics;
        static METRICS_STRING: string;
        static BASELINE_SYMBOL: string;
        static BASELINE_MULTIPLIER: number;
        static HEIGHT_MULTIPLIER: number;
        static _canvas: HTMLCanvasElement | OffscreenCanvas;
        static _context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D;
        static _fonts: {
            [font: string]: IFontMetrics;
        };
        static _newlines: number[];
        static _breakingSpaces: number[];

        constructor(text: string, style: TextStyle, width: number, height: number, lines: string[], lineWidths: number[], lineHeight: number, maxLineWidth: number, fontProperties: IFontMetrics);

        static measureText(text: string, style: TextStyle, wordWrap?: boolean, canvas?: HTMLCanvasElement | OffscreenCanvas): TextMetrics_2;

        private static wordWrap;

        private static addLine;

        private static getFromCache;

        private static collapseSpaces;

        private static collapseNewlines;

        private static trimRight;

        private static isNewline;

        static isBreakingSpace(char: string, _nextChar?: string): boolean;

        private static tokenize;

        static canBreakWords(_token: string, breakWords: boolean): boolean;

        static canBreakChars(_char: string, _nextChar: string, _token: string, _index: number, _breakWords: boolean): boolean;

        static wordWrapSplit(token: string): string[];

        static measureFont(font: string): IFontMetrics;

        static clearMetrics(font?: string): void;
    }
    export { TextMetrics_2 as TextMetrics }


    export class TextStyle implements ITextStyle {
        styleID: number;
        protected _align: TextStyleAlign;
        protected _breakWords: boolean;
        protected _dropShadow: boolean;
        protected _dropShadowAlpha: number;
        protected _dropShadowAngle: number;
        protected _dropShadowBlur: number;
        protected _dropShadowColor: string | number;
        protected _dropShadowDistance: number;
        protected _fill: TextStyleFill;
        protected _fillGradientType: TEXT_GRADIENT;
        protected _fillGradientStops: number[];
        protected _fontFamily: string | string[];
        protected _fontSize: number | string;
        protected _fontStyle: TextStyleFontStyle;
        protected _fontVariant: TextStyleFontVariant;
        protected _fontWeight: TextStyleFontWeight;
        protected _letterSpacing: number;
        protected _lineHeight: number;
        protected _lineJoin: TextStyleLineJoin;
        protected _miterLimit: number;
        protected _padding: number;
        protected _stroke: string | number;
        protected _strokeThickness: number;
        protected _textBaseline: TextStyleTextBaseline;
        protected _trim: boolean;
        protected _whiteSpace: TextStyleWhiteSpace;
        protected _wordWrap: boolean;
        protected _wordWrapWidth: number;
        protected _leading: number;

        constructor(style?: Partial<ITextStyle>);

        clone(): TextStyle;

        reset(): void;

        get align(): TextStyleAlign;
        set align(align: TextStyleAlign);

        get breakWords(): boolean;
        set breakWords(breakWords: boolean);

        get dropShadow(): boolean;
        set dropShadow(dropShadow: boolean);

        get dropShadowAlpha(): number;
        set dropShadowAlpha(dropShadowAlpha: number);

        get dropShadowAngle(): number;
        set dropShadowAngle(dropShadowAngle: number);

        get dropShadowBlur(): number;
        set dropShadowBlur(dropShadowBlur: number);

        get dropShadowColor(): number | string;
        set dropShadowColor(dropShadowColor: number | string);

        get dropShadowDistance(): number;
        set dropShadowDistance(dropShadowDistance: number);

        get fill(): TextStyleFill;
        set fill(fill: TextStyleFill);

        get fillGradientType(): TEXT_GRADIENT;
        set fillGradientType(fillGradientType: TEXT_GRADIENT);

        get fillGradientStops(): number[];
        set fillGradientStops(fillGradientStops: number[]);

        get fontFamily(): string | string[];
        set fontFamily(fontFamily: string | string[]);

        get fontSize(): number | string;
        set fontSize(fontSize: number | string);

        get fontStyle(): TextStyleFontStyle;
        set fontStyle(fontStyle: TextStyleFontStyle);

        get fontVariant(): TextStyleFontVariant;
        set fontVariant(fontVariant: TextStyleFontVariant);

        get fontWeight(): TextStyleFontWeight;
        set fontWeight(fontWeight: TextStyleFontWeight);

        get letterSpacing(): number;
        set letterSpacing(letterSpacing: number);

        get lineHeight(): number;
        set lineHeight(lineHeight: number);

        get leading(): number;
        set leading(leading: number);

        get lineJoin(): TextStyleLineJoin;
        set lineJoin(lineJoin: TextStyleLineJoin);

        get miterLimit(): number;
        set miterLimit(miterLimit: number);

        get padding(): number;
        set padding(padding: number);

        get stroke(): string | number;
        set stroke(stroke: string | number);

        get strokeThickness(): number;
        set strokeThickness(strokeThickness: number);

        get textBaseline(): TextStyleTextBaseline;
        set textBaseline(textBaseline: TextStyleTextBaseline);

        get trim(): boolean;
        set trim(trim: boolean);

        get whiteSpace(): TextStyleWhiteSpace;
        set whiteSpace(whiteSpace: TextStyleWhiteSpace);

        get wordWrap(): boolean;
        set wordWrap(wordWrap: boolean);

        get wordWrapWidth(): number;
        set wordWrapWidth(wordWrapWidth: number);

        toFontString(): string;
    }

    export type TextStyleAlign = 'left' | 'center' | 'right' | 'justify';

    export type TextStyleFill = string | string[] | number | number[] | CanvasGradient | CanvasPattern;

    export type TextStyleFontStyle = 'normal' | 'italic' | 'oblique';

    export type TextStyleFontVariant = 'normal' | 'small-caps';

    export type TextStyleFontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

    export type TextStyleLineJoin = 'miter' | 'round' | 'bevel';

    export type TextStyleTextBaseline = 'alphabetic' | 'top' | 'hanging' | 'middle' | 'ideographic' | 'bottom';

    export type TextStyleWhiteSpace = 'normal' | 'pre' | 'pre-line';




    export class BitmapFont {

        static readonly ALPHA: (string | string[])[];

        static readonly NUMERIC: string[][];

        static readonly ALPHANUMERIC: (string | string[])[];

        static readonly ASCII: string[][];

        static readonly defaultOptions: IBitmapFontOptions;

        static readonly available: Dict<BitmapFont>;

        readonly font: string;

        readonly size: number;

        readonly lineHeight: number;

        readonly chars: Dict<IBitmapFontCharacter>;

        readonly pageTextures: Dict<Texture>;

        readonly distanceFieldRange: number;

        readonly distanceFieldType: string;
        private _ownsTextures;

        constructor(data: BitmapFontData, textures: Texture[] | Dict<Texture>, ownsTextures?: boolean);

        destroy(): void;

        static install(data: string | XMLDocument | BitmapFontData, textures: Texture | Texture[] | Dict<Texture>, ownsTextures?: boolean): BitmapFont;

        static uninstall(name: string): void;

        static from(name: string, textStyle?: TextStyle | Partial<ITextStyle>, options?: IBitmapFontOptions): BitmapFont;
    }


    export class BitmapFontData {

        info: IBitmapFontDataInfo[];

        common: IBitmapFontDataCommon[];

        page: IBitmapFontDataPage[];

        char: IBitmapFontDataChar[];

        kerning: IBitmapFontDataKerning[];

        distanceField: IBitmapFontDataDistanceField[];
        constructor();
    }


    export class BitmapFontLoader {

        static add(): void;

        static use(this: Loader, resource: LoaderResource, next: (...args: any[]) => void): void;

        private static getBaseUrl;

        private static dirname;
    }


    export class BitmapText extends Container {
        static styleDefaults: Partial<IBitmapTextStyle>;

        dirty: boolean;

        protected _textWidth: number;

        protected _textHeight: number;

        protected _text: string;

        protected _maxWidth: number;

        protected _maxLineHeight: number;

        protected _letterSpacing: number;

        protected _anchor: ObservablePoint;

        protected _fontName: string;

        protected _fontSize: number;

        protected _align: TextStyleAlign;

        protected _activePagesMeshData: PageMeshData[];

        protected _tint: number;

        protected _roundPixels: boolean;

        private _textureCache;

        constructor(text: string, style?: Partial<IBitmapTextStyle>);

        updateText(): void;
        updateTransform(): void;
        _render(renderer: Renderer): void;

        getLocalBounds(): Rectangle;

        protected validate(): void;

        get tint(): number;
        set tint(value: number);

        get align(): TextStyleAlign;
        set align(value: TextStyleAlign);

        get fontName(): string;
        set fontName(value: string);

        get fontSize(): number;
        set fontSize(value: number);

        get anchor(): ObservablePoint;
        set anchor(value: ObservablePoint);

        get text(): string;
        set text(text: string);

        get maxWidth(): number;
        set maxWidth(value: number);

        get maxLineHeight(): number;

        get textWidth(): number;

        get letterSpacing(): number;
        set letterSpacing(value: number);

        get roundPixels(): boolean;
        set roundPixels(value: boolean);

        get textHeight(): number;
        destroy(options?: boolean | IDestroyOptions): void;
    }

    export interface IBitmapFontCharacter {
        xOffset: number;
        yOffset: number;
        xAdvance: number;
        texture: Texture;
        page: number;
        kerning: Dict<number>;
    }


    export interface IBitmapFontDataChar {

        id: number;

        page: number;

        x: number;

        y: number;

        width: number;

        height: number;

        xoffset: number;

        yoffset: number;

        xadvance: number;
    }


    export interface IBitmapFontDataCommon {

        lineHeight: number;
    }


    export interface IBitmapFontDataDistanceField {

        fieldType: string;

        distanceRange: number;
    }


    export interface IBitmapFontDataInfo {

        face: string;

        size: number;
    }


    export interface IBitmapFontDataKerning {

        first: number;

        second: number;

        amount: number;
    }


    export interface IBitmapFontDataPage {

        id: number;

        file: string;
    }


    export interface IBitmapFontOptions {

        chars?: string | (string | string[])[];

        resolution?: number;

        padding?: number;

        textureWidth?: number;

        textureHeight?: number;
    }

    export interface IBitmapTextFontDescriptor {
        name: string;
        size: number;
    }

    export interface IBitmapTextStyle {
        fontName: string;
        fontSize: number;
        tint: number;
        align: TextStyleAlign;
        letterSpacing: number;
        maxWidth: number;
    }

    interface PageMeshData {
        index: number;
        indexCount: number;
        vertexCount: number;
        uvsCount: number;
        total: number;
        mesh: Mesh;
        vertices?: Float32Array;
        uvs?: Float32Array;
        indices?: Uint16Array;
    }



    export class Ticker {

        private static _shared;

        private static _system;

        autoStart: boolean;

        deltaTime: number;

        deltaMS: number;

        elapsedMS: number;

        lastTime: number;

        speed: number;

        started: boolean;

        private _head;

        private _requestId;

        private _maxElapsedMS;

        private _minElapsedMS;

        private _protected;

        private _lastFrame;

        private _tick;
        constructor();

        private _requestIfNeeded;

        private _cancelIfNeeded;

        private _startIfPossible;

        add<T = any>(fn: TickerCallback<T>, context?: T, priority?: UPDATE_PRIORITY): this;

        addOnce<T = any>(fn: TickerCallback<T>, context?: T, priority?: UPDATE_PRIORITY): this;

        private _addListener;

        remove<T = any>(fn: TickerCallback<T>, context?: T): this;

        get count(): number;

        start(): void;

        stop(): void;

        destroy(): void;

        update(currentTime?: number): void;

        get FPS(): number;

        get minFPS(): number;
        set minFPS(fps: number);

        get maxFPS(): number;
        set maxFPS(fps: number);

        static get shared(): Ticker;

        static get system(): Ticker;
    }

    export type TickerCallback<T> = (this: T, dt: number) => any;


    export class TickerPlugin {
        static start: () => void;
        static stop: () => void;
        static _ticker: Ticker;
        static ticker: Ticker;

        static init(options?: GlobalMixins.IApplicationOptions): void;

        static destroy(): void;
    }


    export enum UPDATE_PRIORITY {
        INTERACTION = 50,
        HIGH = 25,
        NORMAL = 0,
        LOW = -25,
        UTILITY = -50
    }


    export type ArrayFixed<T, L extends number> = [T, ...Array<T>] & {
        length: L;
    };


    export const BaseTextureCache: {
        [key: string]: BaseTexture;
    };


    export class CanvasRenderTarget {

        canvas: HTMLCanvasElement;

        context: CanvasRenderingContext2D;

        resolution: number;

        constructor(width: number, height: number, resolution?: number);

        clear(): void;

        resize(desiredWidth: number, desiredHeight: number): void;

        destroy(): void;

        get width(): number;
        set width(val: number);

        get height(): number;
        set height(val: number);
    }


    export function clearTextureCache(): void;


    export function correctBlendMode(blendMode: number, premultiplied: boolean): number;


    export function createIndicesForQuads(size: number, outBuffer?: Uint16Array | Uint32Array): Uint16Array | Uint32Array;


    export const DATA_URI: RegExp;








    export function decomposeDataUri(dataUri: string): DecomposedDataUri;

    export interface DecomposedDataUri {
        mediaType: string;
        subType: string;
        charset: string;
        encoding: string;
        data: string;
    }


    export function deprecation(version: string, message: string, ignoreDepth?: number): void;


    export function destroyTextureCache(): void;


    export function determineCrossOrigin(url: string, loc?: Location): string;

    export type Dict<T> = {
        [key: string]: T;
    };



    type FormatFunction = {
        (URL: URL, options?: URLFormatOptions): string;
        (urlObject: UrlObject | string): string;
    };

    export function getBufferType(array: ITypedArray): 'Float32Array' | 'Uint32Array' | 'Int32Array' | 'Uint16Array' | 'Uint8Array' | null;


    export function getResolutionOfUrl(url: string, defaultValue?: number): number;


    export function hex2rgb(hex: number, out?: Array<number> | Float32Array): Array<number> | Float32Array;


    export function hex2string(hex: number): string;

    export function interleaveTypedArrays(arrays: PackedArray[], sizes: number[]): Float32Array;



    export function isPow2(v: number): boolean;


    export function isWebGLSupported(): boolean;


    export function log2(v: number): number;


    export function nextPow2(v: number): number;

    type PackedArray = Float32Array | Uint32Array | Int32Array | Uint8Array;


    interface ParsedUrlQuery {
        [key: string]: string | string[];
    }

    interface ParsedUrlQueryInput {
        [key: string]: unknown;
    }

    type ParseFunction = {
        (urlStr: string): UrlWithStringQuery;
        (urlStr: string, parseQueryString: false | undefined, slashesDenoteHost?: boolean): UrlWithStringQuery;
        (urlStr: string, parseQueryString: true, slashesDenoteHost?: boolean): UrlWithParsedQuery;
        (urlStr: string, parseQueryString: boolean, slashesDenoteHost?: boolean): Url;
    };


    export const premultiplyBlendMode: number[][];


    export function premultiplyRgba(rgb: Float32Array | number[], alpha: number, out?: Float32Array, premultiply?: boolean): Float32Array;


    export function premultiplyTint(tint: number, alpha: number): number;


    export function premultiplyTintToRgba(tint: number, alpha: number, out: Float32Array, premultiply?: boolean): Float32Array;


    export const ProgramCache: {
        [key: string]: Program;
    };


    export function removeItems(arr: any[], startIdx: number, removeCount: number): void;

    type ResolveFunction = {
        (from: string, to: string): string;
    };


    export function rgb2hex(rgb: number[] | Float32Array): number;


    export function sayHello(type: string): void;


    export function sign(n: number): -1 | 0 | 1;


    export function skipHello(): void;


    export function string2hex(string: string): number;


    export const TextureCache: {
        [key: string]: Texture;
    };


    export function trimCanvas(canvas: HTMLCanvasElement): {
        width: number;
        height: number;
        data?: ImageData;
    };


    export function uid(): number;

    interface Url extends UrlObjectCommon {
        port?: string;
        query?: string | null | ParsedUrlQuery;
    }

    export const url: {
        parse: ParseFunction;
        format: FormatFunction;
        resolve: ResolveFunction;
    };

    interface URLFormatOptions {
        auth?: boolean;
        fragment?: boolean;
        search?: boolean;
        unicode?: boolean;
    }

    interface UrlObject extends UrlObjectCommon {
        port?: string | number;
        query?: string | null | ParsedUrlQueryInput;
    }

    interface UrlObjectCommon {
        auth?: string;
        hash?: string;
        host?: string;
        hostname?: string;
        href?: string;
        path?: string;
        pathname?: string;
        protocol?: string;
        search?: string;
        slashes?: boolean;
    }

    interface UrlWithParsedQuery extends Url {
        query: ParsedUrlQuery;
    }

    interface UrlWithStringQuery extends Url {
        query: string | null;
    }


    class EventEmitter<EventTypes extends string | symbol = string | symbol> {
        static prefixed: string | boolean;


        eventNames(): Array<EventTypes>;


        listeners(event: EventTypes): Array<EventEmitter.ListenerFn>;


        listenerCount(event: EventTypes): number;


        emit(event: EventTypes, ...args: Array<any>): boolean;


        on(event: EventTypes, fn: EventEmitter.ListenerFn, context?: any): this;
        addListener(event: EventTypes, fn: EventEmitter.ListenerFn, context?: any): this;


        once(event: EventTypes, fn: EventEmitter.ListenerFn, context?: any): this;


        removeListener(event: EventTypes, fn?: EventEmitter.ListenerFn, context?: any, once?: boolean): this;
        off(event: EventTypes, fn?: EventEmitter.ListenerFn, context?: any, once?: boolean): this;


        removeAllListeners(event?: EventTypes): this;
    }

    namespace EventEmitter {
        export interface ListenerFn {
            (...args: Array<any>): void;
        }

        export interface EventEmitterStatic {
            new <EventTypes extends string | symbol = string | symbol>(): EventEmitter<EventTypes>;
        }

        export const EventEmitter: EventEmitterStatic;
    }
}




    
    `;
  var libUri = "ts:yang/custom.d.ts";
  monaco.languages.typescript.javascriptDefaults.addExtraLib(libSource, libUri);

  if (monaco.editor.getModel(monaco.Uri.parse(libUri))) {
    return;
  }
  // When resolving definitions and references, the editor will try to use created models.
  // Creating a model for the library allows "peek definition/references" commands to work with the library.
  monaco.editor.createModel(libSource, "typescript", monaco.Uri.parse(libUri));
}
