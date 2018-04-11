declare module '*.html' {
    import Vue, { ComponentOptions } from 'vue'
    interface WithRender extends Vue{
        <V extends Vue>(options: ComponentOptions<V>): ComponentOptions<V>
        <V>(component: V): V
    }
    const withRender: WithRender;
    export default withRender
}