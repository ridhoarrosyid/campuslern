<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('majors', function (Blueprint $table) {
            $table->id();
            $table->foreignId("university_id")->constrained()->onDelete("set null");
            $table->string("name");
            $table->string("description");
            $table->softDeletes();
            $table->unsignedBigInteger("created_by");
            $table->unsignedBigInteger("updated_by");
            $table->foreign("created_by")->references("id")->on("users")->onDelete("set null");
            $table->foreign("updated_by")->references("id")->on("users")->onDelete("set null");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('majors');
    }
};
