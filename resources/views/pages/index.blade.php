@extends('layouts.main')

@section('title', 'Home')

@section('content')

   <navbar title="Main" auth="{{ \Auth::check() ? 'true' : 'false' }}"></navbar>

@endsection