@extends('layouts.app')

@section('content')
    <section class="section is-fixed-top-touch">
        <home title="Dashboard">
            @if (session('status'))
                <query-message :success="true" :fail="false" message="{{ session('status') }}"></query-message>
            @endif

        </home>
    </section>
    <section class="section is-fixed-bottom">
        <example-component title="Dashboard">
            <h1 class="has-text-centered">Welcome to the Peruvian Recipe Cookbook!</h1>
            @if (session('status'))
                <query-message :success="true" :fail="false" message="{{ session('status') }}"></query-message>
            @endif
            <h2 class="has-text-centered"><strong>{{ auth()->user()->name }}</strong></h2>
        </example-component>
    </section>
@endsection
