<?php

namespace App\Models;

use App\Models\Base\SelfModel;
use App\Traits\Searchable;

/**
 * @property integer $id_pola_karir
 * @property string $esselon
 * @property string $fungsional
 * @property string $jenis_jabatan
 * @property string $url
 * @property string $created_at
 * @property string $updated_at
 * @property array $id_opd
 */
class PolaKarir extends SelfModel
{
    use Searchable;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tbl_pola_karir';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['esselon', 'fungsional', 'jenis_jabatan', 'url','id_opd', 'created_at', 'updated_at'];

    /**
     * The attributes that are searchable.
     *
     * @var array
     */
    public $searchable = ['esselon', 'fungsional', 'jenis_jabatan', 'url','id_opd', 'created_at', 'updated_at'];

    protected $casts = [
        'id_opd' => 'json'
    ];

}
